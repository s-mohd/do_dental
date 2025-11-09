// Helpers for dealing with FDI tooth numbers and projections

const BASE_CANVAS_WIDTH = {
  1: 180,
  2: 150,
  3: 180,
  4: 148,
  5: 142,
  6: 212,
  7: 196,
  8: 184,
}

const PROJECTION_BASE_HEIGHT = {
  buccal: 576,
  lingual: 576,
  palatal: 576,
  incisal: 260,
}

const PRIMARY_OFFSET = 4
const UPPER_QUADRANTS = new Set([1, 2])
const UPPER_PRIMARY = new Set([5, 6])

export function parseToothNumber(toothNumber) {
  const parsed = parseInt(toothNumber, 10)
  if (!Number.isFinite(parsed)) {
    return {
      set: "permanent",
      rawQuadrant: 1,
      quadrant: 1,
      position: 1,
      jaw: "upper",
      mirrorImage: false,
      shouldInvertSide: false,
    }
  }

  const rawQuadrant = Math.floor(parsed / 10)
  const position = parsed % 10 || 1
  const isPrimary = rawQuadrant > PRIMARY_OFFSET
  const quadrant = isPrimary ? rawQuadrant - PRIMARY_OFFSET : rawQuadrant

  const isUpper =
    UPPER_QUADRANTS.has(quadrant) || (isPrimary && UPPER_PRIMARY.has(rawQuadrant))

  return {
    set: isPrimary ? "deciduous" : "permanent",
    rawQuadrant,
    quadrant,
    position,
    jaw: isUpper ? "upper" : "lower",
    mirrorImage: quadrant === 2 || quadrant === 3,
    shouldInvertSide: quadrant === 2 || quadrant === 3,
  }
}

export function normaliseProjection(projection, jaw) {
  if (jaw === "upper" && projection === "lingual") return "palatal"
  return projection
}

export function baseCanvasWidth(toothPosition) {
  return BASE_CANVAS_WIDTH[toothPosition] || 180
}

export function baseCanvasHeight(projection) {
  return PROJECTION_BASE_HEIGHT[projection] || PROJECTION_BASE_HEIGHT.buccal
}
