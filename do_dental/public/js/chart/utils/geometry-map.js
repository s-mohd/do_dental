export const PERIODONTAL_GRID = { lines: 15, height: 26 }

const DATA = {
  permanent: {
    upper: {
      1: {
        points: {
          buccal: { left: 72, right: 66, center_offset: 0 },
          palatal: { left: 68, right: 66, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      2: {
        points: {
          buccal: { left: 54, right: 56, center_offset: -12 },
          palatal: { left: 50, right: 56, center_offset: -12 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      3: {
        points: {
          buccal: { left: 62, right: 56, center_offset: 0 },
          palatal: { left: 58, right: 60, center_offset: -4 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      4: {
        points: {
          buccal: { left: 56, right: 52, center_offset: 0 },
          palatal: { left: 52, right: 56, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      5: {
        points: {
          buccal: { left: 50, right: 54, center_offset: 0 },
          palatal: { left: 50, right: 54, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      6: {
        points: {
          buccal: { left: 76, right: 82, center_offset: 0 },
          palatal: { left: 78, right: 84, center_offset: 0 },
        },
        depthOffset: { default: -1 },
      },
      7: {
        points: {
          buccal: { left: 76, right: 72, center_offset: 0 },
          palatal: { left: 72, right: 70, center_offset: 0 },
        },
        depthOffset: { default: -1 },
      },
      8: {
        points: {
          buccal: { left: 88, right: 84, center_offset: 0 },
          palatal: { left: 88, right: 86, center_offset: 0 },
        },
        depthOffset: { default: -1 },
      },
    },
    lower: {
      1: {
        points: {
          buccal: { left: 44, right: 44, center_offset: 0 },
          palatal: { left: 42, right: 50, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      2: {
        points: {
          buccal: { left: 44, right: 46, center_offset: 0 },
          palatal: { left: 44, right: 50, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      3: {
        points: {
          buccal: { left: 62, right: 60, center_offset: 0 },
          palatal: { left: 64, right: 62, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      4: {
        points: {
          buccal: { left: 62, right: 54, center_offset: 0 },
          palatal: { left: 66, right: 54, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      5: {
        points: {
          buccal: { left: 60, right: 54, center_offset: 0 },
          palatal: { left: 62, right: 58, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -2 },
      },
      6: {
        points: {
          buccal: { left: 92, right: 96, center_offset: 0 },
          palatal: { left: 94, right: 92, center_offset: 0 },
        },
        depthOffset: { default: -1 },
      },
      7: {
        points: {
          buccal: { left: 84, right: 80, center_offset: 0 },
          palatal: { left: 84, right: 80, center_offset: 0 },
        },
        depthOffset: { default: -1 },
      },
      8: {
        points: {
          buccal: { left: 80, right: 80, center_offset: 0 },
          palatal: { left: 80, right: 82, center_offset: 0 },
        },
        depthOffset: { default: -1 },
      },
    },
  },
  deciduous: {
    upper: {
      1: {
        points: {
          buccal: { left: 56, right: 50, center_offset: 6 },
          palatal: { left: 55, right: 50, center_offset: 6 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      2: {
        points: {
          buccal: { left: 45, right: 42, center_offset: 0 },
          palatal: { left: 50, right: 41, center_offset: 2 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      3: {
        points: {
          buccal: { left: 62, right: 56, center_offset: 9 },
          palatal: { left: 59, right: 60, center_offset: -1 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      4: {
        points: {
          buccal: { left: 53, right: 46, center_offset: 8 },
          palatal: { left: 56, right: 46, center_offset: 4 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      5: {
        points: {
          buccal: { left: 40, right: 45, center_offset: 0 },
          palatal: { left: 43, right: 43, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
    },
    lower: {
      1: {
        points: {
          buccal: { left: 41, right: 45, center_offset: 0 },
          palatal: { left: 42, right: 45, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      2: {
        points: {
          buccal: { left: 38, right: 42, center_offset: 0 },
          palatal: { left: 38, right: 42, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      3: {
        points: {
          buccal: { left: 55, right: 50, center_offset: -7 },
          palatal: { left: 49, right: 52, center_offset: -5 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      4: {
        points: {
          buccal: { left: 60, right: 56, center_offset: 5 },
          palatal: { left: 54, right: 62, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
      5: {
        points: {
          buccal: { left: 59, right: 60, center_offset: 0 },
          palatal: { left: 65, right: 60, center_offset: 0 },
        },
        depthOffset: { default: -1, buccal: -1 },
      },
    },
  },
}

function mirror(points) {
  return {
    buccal: {
      left: points.buccal.right,
      right: points.buccal.left,
      center_offset: -points.buccal.center_offset,
    },
    palatal: {
      left: points.palatal.right,
      right: points.palatal.left,
      center_offset: -points.palatal.center_offset,
    },
  }
}

function cloneGeometry(base) {
  return {
    points: {
      buccal: { ...base.points.buccal },
      palatal: { ...base.points.palatal },
    },
    depthOffset: { ...base.depthOffset },
  }
}

export function getToothGeometry(meta) {
  const isPermanent = meta.set === "permanent"
  const archKey = meta.jaw === "upper" ? "upper" : "lower"
  const bank = (isPermanent ? DATA.permanent : DATA.deciduous)[archKey]
  const base = bank?.[meta.position]
  if (!base) return null

  const needsMirror = meta.quadrant === 2 || meta.quadrant === 3 || meta.quadrant === 6 || meta.quadrant === 7
  const geometry = cloneGeometry(base)
  if (needsMirror) {
    geometry.points = mirror(base.points)
  }
  return geometry
}
