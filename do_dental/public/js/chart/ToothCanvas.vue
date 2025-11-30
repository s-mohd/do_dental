<template>
  <div
    class="tooth-canvas d-flex flex-column align-items-center"
    :class="{ active: isSelected }"
    @click="emit('select', toothNumber)"
    @mousedown.left.stop.prevent="handleMouseDown"
    @mouseenter="handleMouseEnter"
    @mouseup.left.stop="handleMouseUp"
  >
    <span v-if="showNum == 'up'" class="number">{{ toothNumber }}</span>
    <canvas ref="canvas"></canvas>
    <span v-if="showNum == 'down'" class="number">{{ toothNumber }}</span>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import { overlayMap } from "./utils/overlays-map.js"
import { surfaceMap } from "./utils/surfaces-map.js"
import { overlayColors } from "./utils/overlay-colors.js"
import {
  parseToothNumber,
  normaliseProjection,
  baseCanvasWidth,
  baseCanvasHeight
} from "./utils/tooth-utils.js"
import { buildPeriodontalValues } from "./utils/periodontal.js"
import { PERIODONTAL_GRID, getToothGeometry } from "./utils/geometry-map.js"

const emit = defineEmits(["select", "drag-start", "drag-hover", "drag-end"])

const props = defineProps({
  toothNumber: String,
  arch: String,
  projection: { type: String, default: "buccal" },
  view: String,
  scale: { type: Number, default: 0.1 },
  invertY: { type: Boolean, default: false },
  showNum: { type: String, default: "" },
  isSelected: { type: Boolean, default: false },
  condition: { type: Object, default: null },
  pathology: { type: Array, default: () => [] },
  restorations: { type: Array, default: () => [] },
  periodontal: {
    type: Object,
    default: () => ({
      buccal: { mb: { depth: 0, margin: 0 }, b: { depth: 0, margin: 0 }, db: { depth: 0, margin: 0 } },
      lingual: { ml: { depth: 0, margin: 0 }, l: { depth: 0, margin: 0 }, dl: { depth: 0, margin: 0 } },
    }),
  },
  previousNumber: { type: String, default: null },
  nextNumber: { type: String, default: null },
  previousPeriodontal: { type: Object, default: null },
  nextPeriodontal: { type: Object, default: null },
  showPathology: { type: Boolean, default: true },
  showRestorations: { type: Boolean, default: true },
  showPeriodontal: { type: Boolean, default: true },
})

const canvas = ref(null)

function getToothType(num) {
  const parsed = parseInt(num, 10)
  const position = Number.isFinite(parsed) ? parsed % 10 || 1 : 1
  if ([1, 2, 3].includes(position)) return "incisor"
  if ([4, 5].includes(position)) return "premolar"
  return "molar"
}

function resolveToothImage(meta) {
  let imageType = "base"
  if (props.condition?.state === "Implant") imageType = "implant"
  else if (["Missing", "Unerupted"].includes(props.condition?.state)) imageType = "outline"
  else if (["Crown", "Bridge"].includes(props.condition?.state)) imageType = "crown"

  const ageSuffix = meta.set === "deciduous" ? "deciduous" : "permanent"
  const parsed = parseInt(props.toothNumber, 10)
  const numberToReturn = Number.isFinite(parsed) ? Math.abs(parsed) % 10 : 0
  return `${imageType}-${ageSuffix}-${props.arch}-${numberToReturn}-${props.projection}.png`
}

function getOverlaySVG(meta, toothType, surface) {
  const ageSuffix = meta.set === "deciduous" ? "deciduous" : "permanent"
  const group = overlayMap[ageSuffix]?.[toothType] || {}
  const projectionKey = normaliseProjection(props.projection, meta.jaw)
  const ids = group[projectionKey]
  if (!ids || !ids.length) return []

  const projectionSurfaces = surfaceMap[toothType] || {}
  const surfaceKey = String(surface || "").toLowerCase().replace(/\s+/g, "_")
  const overlayIds = ids.filter((id) => projectionSurfaces[surfaceKey]?.includes(id))
  if (!overlayIds.length) return []

  const parsed = parseInt(props.toothNumber, 10)
  const imgNum = Number.isFinite(parsed) ? Math.abs(parsed) % 10 : 0
  return overlayIds.map((id) => `/assets/do_dental/img/surfaces/${ageSuffix}-${props.arch}-${imgNum}-${id}.svg`)
}

async function loadSVGWithColor(url, color) {
  const res = await fetch(url)
  let svgText = await res.text()
  svgText = svgText
    .replace(/fill="[^"]*"/g, "")
    .replace(/stroke="[^"]*"/g, "")
    .replace(/<path/g, `<path fill="${color}" stroke="${color}"`)
  const blob = new Blob([svgText], { type: "image/svg+xml" })
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = URL.createObjectURL(blob)
  })
}

function computeHorizontal(geometry, projectionKey, baseWidth, newWidth) {
  if (!geometry) {
    const center = newWidth / 2
    const span = newWidth * 0.35
    return {
      horizontal: {
        leftSide: center - span,
        left: center - span * 0.7,
        center,
        right: center + span * 0.7,
        rightSide: center + span,
      },
      depthOffset: 0,
    }
  }

  const projectionData = geometry.points[projectionKey] || geometry.points.buccal
  const baseCenter = baseWidth / 2 + (projectionData.center_offset || 0)
  const baseLeft = baseCenter - projectionData.left
  const baseRight = baseCenter + projectionData.right
  const baseLeftSide = baseLeft - (baseCenter - baseLeft)
  const baseRightSide = baseRight + (baseRight - baseCenter)
  const scale = baseWidth ? newWidth / baseWidth : 1

  return {
    horizontal: {
      leftSide: baseLeftSide * scale,
      left: baseLeft * scale,
      center: baseCenter * scale,
      right: baseRight * scale,
      rightSide: baseRightSide * scale,
    },
    depthOffset:
      (geometry.depthOffset && geometry.depthOffset[projectionKey]) ??
      geometry.depthOffset?.default ??
      0,
  }
}

function computeLinePoints({
  projection,
  meta,
  horizontal,
  periodontalValues,
  levelToY,
  previousValues,
  nextValues,
}) {
  const baseLeftKey = `${meta.shouldInvertSide ? "mesio" : "disto"}-${projection}`
  const baseRightKey = `${meta.shouldInvertSide ? "disto" : "mesio"}-${projection}`
  let nextKey = baseLeftKey
  let prevKey = baseRightKey

  if (meta.position === 1) {
    if (!(meta.quadrant === 1 || meta.quadrant === 4)) {
      nextKey = `mesio-${projection}`
    }
    if (!(meta.quadrant === 2 || meta.quadrant === 3)) {
      prevKey = `mesio-${projection}`
    }
  }

  const leftSite = periodontalValues[nextKey]
  const rightSite = periodontalValues[prevKey]
  const centralSite = periodontalValues[projection]

  if (!leftSite || !rightSite || !centralSite) return null

  let o = leftSite.margin
  let s = leftSite.margin
  let i = centralSite.margin
  let V = rightSite.margin
  let l = rightSite.margin
  let r = -leftSite.depth + s
  let dVal = -centralSite.depth + i
  let q = -rightSite.depth + V
  let p = -rightSite.depth + l

  if (previousValues) {
    const prevSite = previousValues[prevKey]
    if (prevSite) {
      o = prevSite.margin
      r = -prevSite.depth + o
    }
  }

  if (nextValues) {
    const nextSite = nextValues[nextKey]
    if (nextSite) {
      l = nextSite.margin
      p = -nextSite.depth + l
    }
  }

  const gingivalMargin = {
    1: { x: horizontal.leftSide, y: levelToY(o) },
    2: { x: horizontal.left, y: levelToY(s) },
    3: { x: horizontal.center, y: levelToY(i) },
    4: { x: horizontal.right, y: levelToY(V) },
    5: { x: horizontal.rightSide, y: levelToY(l) },
  }

  const probingDepth = {
    1: { x: gingivalMargin[1].x, y: levelToY(r) },
    2: { x: gingivalMargin[2].x, y: levelToY(-leftSite.depth + s) },
    3: { x: gingivalMargin[3].x, y: levelToY(dVal) },
    4: { x: gingivalMargin[4].x, y: levelToY(-rightSite.depth + V) },
    5: { x: gingivalMargin[5].x, y: levelToY(p) },
  }

  return { gingivalMargin, probingDepth }
}

function drawPointsCurve(ctx, linePoints, curveName, fromIndex, toIndex, invertControls) {
  const start = linePoints[curveName][fromIndex]
  const end = linePoints[curveName][toIndex]
  if (!start || !end) return

  const ctrlStartX = invertControls ? end.x : start.x
  const ctrlEndX = invertControls ? start.x : end.x
  const controlX = ctrlStartX + (ctrlEndX - ctrlStartX) / 2

  ctx.bezierCurveTo(controlX, start.y, controlX, end.y, end.x, end.y)
}

function drawGingivalMargin(ctx, linePoints, width, strokeWidth) {
  ctx.setLineDash([])
  ctx.lineWidth = strokeWidth
  ctx.strokeStyle = overlayColors.periodontal.gingivalMargin
  ctx.beginPath()
  ctx.moveTo(0, linePoints.gingivalMargin[1].y)
  ctx.lineTo(linePoints.gingivalMargin[1].x, linePoints.gingivalMargin[1].y)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 1, 2, false)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 2, 3, false)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 3, 4, true)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 4, 5, true)
  ctx.lineTo(width, linePoints.gingivalMargin[5].y)
  ctx.stroke()
}

function drawProbingDepth(ctx, linePoints, width, strokeWidth) {
  ctx.setLineDash([])
  ctx.lineWidth = strokeWidth
  ctx.strokeStyle = overlayColors.periodontal.probingLine
  ctx.beginPath()
  ctx.moveTo(0, linePoints.probingDepth[1].y)
  ctx.lineTo(linePoints.probingDepth[1].x, linePoints.probingDepth[1].y)
  drawPointsCurve(ctx, linePoints, "probingDepth", 1, 2, false)
  drawPointsCurve(ctx, linePoints, "probingDepth", 2, 3, false)
  drawPointsCurve(ctx, linePoints, "probingDepth", 3, 4, true)
  drawPointsCurve(ctx, linePoints, "probingDepth", 4, 5, true)
  ctx.lineTo(width, linePoints.probingDepth[5].y)
  ctx.stroke()
}

function drawProbingDepthArea(ctx, linePoints, strokeWidth) {
  ctx.setLineDash([])
  ctx.lineWidth = Math.max(1, strokeWidth * 0.4)
  ctx.strokeStyle = "rgba(0,0,0,0)"
  ctx.fillStyle = overlayColors.periodontal.probingArea
  ctx.beginPath()
  ctx.moveTo(linePoints.probingDepth[1].x, linePoints.probingDepth[1].y)
  drawPointsCurve(ctx, linePoints, "probingDepth", 1, 2, false)
  drawPointsCurve(ctx, linePoints, "probingDepth", 2, 3, false)
  drawPointsCurve(ctx, linePoints, "probingDepth", 3, 4, true)
  drawPointsCurve(ctx, linePoints, "probingDepth", 4, 5, true)
  ctx.lineTo(linePoints.gingivalMargin[5].x, linePoints.gingivalMargin[5].y)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 5, 4, false)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 4, 3, false)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 3, 2, true)
  drawPointsCurve(ctx, linePoints, "gingivalMargin", 2, 1, true)
  ctx.closePath()
  ctx.fill()
}

async function drawTooth() {
  if (!canvas.value) return

  const ctx = canvas.value.getContext("2d")
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  const meta = parseToothNumber(props.toothNumber)
  const img = new Image()
  img.src = `/assets/do_dental/img/${resolveToothImage(meta)}`

  img.onload = async () => {
    const projectionKey = normaliseProjection(props.projection, meta.jaw)
    const baseWidth = baseCanvasWidth(meta.position)
    const baseHeight = baseCanvasHeight(projectionKey)

    const newWidth = baseWidth
    const newHeight = baseHeight

    canvas.value.width = baseWidth
    canvas.value.height = baseHeight
    // canvas.value.style.width = `${Math.max(baseWidth * props.scale, 1)}px`
    // canvas.value.style.height = `${Math.max(baseHeight * props.scale, 1)}px`

    canvas.value.style.transform = props.invertY ? "scaleY(-1)" : ""

    const flipX = meta.mirrorImage ? -1 : 1
    const drawOffsetX = (baseWidth - newWidth) / 2
    const drawOffsetY = (baseHeight - newHeight) / 2
    const applyToothTransform = (drawFn) => {
      ctx.save()
      ctx.translate(drawOffsetX, drawOffsetY)
      if (flipX === -1) {
        ctx.translate(newWidth, 0)
        ctx.scale(-1, 1)
      }
      drawFn()
      ctx.restore()
    }

    const baseGeometry = getToothGeometry(meta)
    const geometry = computeHorizontal(baseGeometry, projectionKey, baseWidth, newWidth)
    const lineHeight = PERIODONTAL_GRID.height
    const levelToY = (level) => (level + PERIODONTAL_GRID.lines) * lineHeight

    const periodontalValues = props.showPeriodontal
      ? buildPeriodontalValues(props.periodontal, {
          projection: props.projection,
          jaw: meta.jaw,
          position: meta.position,
          toothType: getToothType(props.toothNumber),
          sideSign: meta.mirrorImage ? -1 : 1,
        })
      : null

    const previousValues = (() => {
      if (!props.previousNumber || !props.previousPeriodontal) return null
      const prevMeta = parseToothNumber(props.previousNumber)
      return buildPeriodontalValues(props.previousPeriodontal, {
        projection: props.projection,
        jaw: prevMeta.jaw,
        position: prevMeta.position,
        toothType: getToothType(props.previousNumber),
        sideSign: prevMeta.mirrorImage ? -1 : 1,
      })
    })()

    const nextValues = (() => {
      if (!props.nextNumber || !props.nextPeriodontal) return null
      const nextMeta = parseToothNumber(props.nextNumber)
      return buildPeriodontalValues(props.nextPeriodontal, {
        projection: props.projection,
        jaw: nextMeta.jaw,
        position: nextMeta.position,
        toothType: getToothType(props.nextNumber),
        sideSign: nextMeta.mirrorImage ? -1 : 1,
      })
    })()

    if (periodontalValues && geometry.depthOffset) {
      const offsets = new Map()
      if (geometry.depthOffset.default != null) offsets.set("default", geometry.depthOffset.default)
      for (const [key, value] of Object.entries(geometry.depthOffset)) {
        if (key !== "default") offsets.set(key, value)
      }

      const collectKeys = (base) => {
        if (!base) return []
        return [base, `mesio-${base}`, `disto-${base}`]
      }

      const candidates = new Set([
        ...collectKeys(props.projection),
        ...collectKeys(projectionKey),
      ])

      const getProjectionLabel = (key) => {
        if (!key) return null
        const parts = key.split("-")
        return parts.length > 1 ? parts[1] : parts[0]
      }

      candidates.forEach((key) => {
        if (!periodontalValues[key]) return
        const projectionLabel = getProjectionLabel(key)
        const offset =
          offsets.get(projectionLabel) ??
          offsets.get(projectionKey) ??
          offsets.get(props.projection) ??
          offsets.get("default") ??
          0
        periodontalValues[key] = {
          ...periodontalValues[key],
          margin: periodontalValues[key].margin + offset,
        }
      })
    }

    let linePoints =
      props.showPeriodontal && periodontalValues
        ? computeLinePoints({
            projection: props.projection,
            meta,
            horizontal: geometry.horizontal,
            periodontalValues,
            levelToY,
            previousValues,
            nextValues,
          })
        : null

    if (
      linePoints &&
      meta.jaw === "lower" &&
      ["buccal", "lingual", "palatal"].includes(projectionKey)
    ) {
      const mirrorSet = (set) => {
        const mirrored = {}
        Object.keys(set).forEach((key) => {
          mirrored[key] = { ...set[key], y: baseHeight - set[key].y }
        })
        return mirrored
      }
      linePoints = {
        gingivalMargin: mirrorSet(linePoints.gingivalMargin),
        probingDepth: mirrorSet(linePoints.probingDepth),
      }
    }

    applyToothTransform(() => {
      ctx.drawImage(img, 0, 0, newWidth, newHeight)
    })

    const toothType = getToothType(props.toothNumber)

    if (props.showPathology) {
      for (const p of props.pathology) {
        if (p.tooth !== props.toothNumber) continue
        const surfaces = p.decay_surfaces || p.wear_surfaces || []
        const color =
          p.pathology_type === "Discoloration"
            ? overlayColors.pathology.Discoloration[p.discoloration_type] ||
              overlayColors.pathology.Discoloration.Gray
            : overlayColors.pathology[p.pathology_type] || overlayColors.pathology.Decay

        for (const s of surfaces) {
          const svgs = getOverlaySVG(meta, toothType, s.surface || s)
          for (const url of svgs) {
            const overlayImg = await loadSVGWithColor(url, color)
            applyToothTransform(() => {
              ctx.drawImage(overlayImg, 0, 0, newWidth, newHeight)
            })
          }
        }
      }
    }

    if (props.showRestorations) {
      for (const r of props.restorations) {
        if (r.tooth !== props.toothNumber) continue
        const color = overlayColors.restoration[r.material] || overlayColors.restoration.Unknown
        for (const s of r.surfaces || []) {
          const svgs = getOverlaySVG(meta, toothType, s.surface || s)
          for (const url of svgs) {
            const overlayImg = await loadSVGWithColor(url, color)
            applyToothTransform(() => {
              ctx.drawImage(overlayImg, 0, 0, newWidth, newHeight)
            })
          }
        }
      }
    }

    if (props.showPeriodontal && linePoints) {
      const periodontalStrokeWidth = 8
      applyToothTransform(() => {
        drawProbingDepthArea(ctx, linePoints, periodontalStrokeWidth)
        drawProbingDepth(ctx, linePoints, newWidth, periodontalStrokeWidth)
        drawGingivalMargin(ctx, linePoints, newWidth, periodontalStrokeWidth)
      })
    }
  }
}

onMounted(drawTooth)
watch(
  () => [
    props.toothNumber,
    props.arch,
    props.projection,
    props.scale,
    props.condition,
    props.pathology,
    props.restorations,
    props.periodontal,
    props.showPathology,
    props.showRestorations,
    props.showPeriodontal,
    props.previousNumber,
    props.nextNumber,
    props.previousPeriodontal,
    props.nextPeriodontal,
  ],
  drawTooth,
  { deep: true }
)

function handleMouseDown(event) {
  if (event.button !== 0) return
  emit("drag-start", {
    tooth: props.toothNumber,
    additive: event.metaKey || event.ctrlKey || event.shiftKey,
    remove: event.altKey,
  })
}

function handleMouseEnter(event) {
  if (!event.buttons) return
  emit("drag-hover", props.toothNumber)
}

function handleMouseUp(event) {
  if (event.button !== 0) return
  emit("drag-end")
}
</script>


<style scoped>
canvas { vertical-align: middle; outline: none; }
.number {
  font-size: 10px; 
  line-height: 16px; 
  display: block;
  border-radius: 50%;
}
.tooth-canvas {
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
  user-select: none;
}

.tooth-canvas.active {
  transform: scale(1.05);
  filter: drop-shadow(0 0 8px rgba(15, 98, 254, 0.45));
}
</style>
