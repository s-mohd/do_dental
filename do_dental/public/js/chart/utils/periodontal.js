import { normaliseProjection } from "./tooth-utils.js"

// Baseline gingival margins per tooth type & projection (Derec-derived)
const BASE_MARGIN_LEVELS = {
  incisor: {
    buccal: { mesial: -5.2, central: -6.5, distal: -5.2 },
    palatal: { mesial: -5.0, central: -6.3, distal: -5.0 },
    lingual: { mesial: -4.9, central: -6.1, distal: -4.9 },
  },
  premolar: {
    buccal: { mesial: -5.7, central: -6.4, distal: -5.7 },
    palatal: { mesial: -5.4, central: -6.1, distal: -5.4 },
    lingual: { mesial: -5.3, central: -6.0, distal: -5.3 },
  },
  molar: {
    buccal: { mesial: -6.0, central: -6.6, distal: -6.0 },
    palatal: { mesial: -5.7, central: -6.3, distal: -5.7 },
    lingual: { mesial: -5.6, central: -6.2, distal: -5.6 },
  },
}

// Position bias keeps the arch smooth through the midline
const POSITION_MARGIN_ADJUST = {
  1: 0.75,
  2: 0.55,
  3: 0.4,
  4: 0.2,
  5: 0.12,
  6: 0.28,
  7: 0.42,
  8: 0.58,
}

const DEFAULT_DEPTH_MM = 3.2
const MARGIN_MM_TO_LEVEL = 0.95
const DEPTH_MM_TO_LEVEL = 0.85
const TYPE_BASELINE_SHIFT = {
  incisor: -5.0,
  premolar: -5.3,
  molar: -5.7,
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function baseLevelsForProjection(projection, options) {
  const typeGroup = BASE_MARGIN_LEVELS[options.toothType] || BASE_MARGIN_LEVELS.molar
  const base = typeGroup[projection] || typeGroup.buccal
  const adjustSign = options.sideSign ?? 1
  const adjust = adjustSign * (POSITION_MARGIN_ADJUST[options.position] ?? 0)
  const baselineShift = TYPE_BASELINE_SHIFT[options.toothType] ?? TYPE_BASELINE_SHIFT.molar
  return {
    mesial: base.mesial + adjust - baselineShift,
    central: base.central + adjust * 0.6 - baselineShift,
    distal: base.distal + adjust - baselineShift,
  }
}

function convertMargin(site, baseLevel) {
  const marginMm = toNumber(site?.margin)
  return baseLevel + marginMm * MARGIN_MM_TO_LEVEL
}

function convertDepth(site) {
  const depthMm = Math.max(toNumber(site?.depth, DEFAULT_DEPTH_MM), 0)
  return depthMm * DEPTH_MM_TO_LEVEL
}

function normaliseSite(site, baseLevel) {
  return {
    margin: convertMargin(site, baseLevel),
    depth: convertDepth(site),
    bleeding: Boolean(site?.bleeding),
    plaque: Boolean(site?.plaque),
    suppuration: Boolean(site?.suppuration || site?.pus),
  }
}

export function buildPeriodontalValues(raw, options) {
  const projection = normaliseProjection(options.projection, options.jaw)
  const levels = {
    buccal: baseLevelsForProjection("buccal", options),
    palatal: baseLevelsForProjection("palatal", options),
    lingual: baseLevelsForProjection("lingual", options),
  }

  const buccal = raw?.buccal || {}
  const lingual = raw?.lingual || {}

  return {
    "mesio-buccal": normaliseSite(buccal.mb, levels.buccal.mesial),
    buccal: normaliseSite(buccal.b, levels.buccal.central),
    "disto-buccal": normaliseSite(buccal.db, levels.buccal.distal),
    "mesio-lingual": normaliseSite(lingual.ml, levels.lingual.mesial),
    lingual: normaliseSite(lingual.l, levels.lingual.central),
    "disto-lingual": normaliseSite(lingual.dl, levels.lingual.distal),
    "mesio-palatal": normaliseSite(lingual.ml, levels.palatal.mesial),
    palatal: normaliseSite(lingual.l, levels.palatal.central),
    "disto-palatal": normaliseSite(lingual.dl, levels.palatal.distal),
  }
}
