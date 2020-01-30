export const defaultAppData = {
  title: "TILES",
  infoUrl: "https://artfly.io/generative-tiles",
  settings: {
    separateWidthAndHeight: false,
    strokeColour: "#000",
    fillColour: "#fff",
    tubeColour: "#fff",
    strokeThickness: {
      type: "range",
      min: 1,
      max: 10,
      value: 2
    },
    tileWidth: {
      type: "range",
      min: 10,
      max: 300,
      value: 80
    },
    tileHeight: {
      type: "range",
      min: 10,
      max: 300,
      value: 80
    },
    groutThickness: {
      type: "range",
      min: 1,
      max: 40,
      value: 0
    },
    tileCornerRoundness: {
      type: "range",
      step: 0.01,
      min: 0,
      max: 1,
      value: 0.17
    },
    currentPreset: "diagonals",
    presets: {
      diagonals: {
        number: 1,
        name: "2 Diagonals",
        keys: ["diagonal1", "diagonal2"],
        description:
          "Simply randomising tiles containing the 2 possible diagonal lines gives a surprisingly pleasing result.  Try deselecting and reselecting one of the tiles to flip from order to art over and over! Touch or click on the pattern to generate a new combination."
      },
      fourEdgeConnections: {
        number: 2,
        name: "4 Edge Connections",
        keys: ["drawCross", "drawCornerCurves1", "drawCornerCurves2"],
        description:
          "Here we've got three variations, giving a greater range of possibilities, but I reckon it's still nice with any two of them."
      },
      EightEdgeConnections: {
        number: 3,
        name: "8 Edge Connections",
        keys: [
          "doubleLoop1",
          "doubleLoop2",
          "allLoopEnds",
          "crossLoops1",
          "crossLoops2",
          "crossLoopWithEnds",
          "downLoopWithEnds",
          "singleLoopWithEnds1",
          "singleLoopWithEnds2",
          "singleLoopWithEnds3",
          "singleLoopWithEnds4"
        ],
        description:
          "With double conector points on each side you end up with nice worm-like patterns."
      }
    },
    selectedTiles: {
      diagonal1: true,
      diagonal2: true,

      drawCross: false,
      drawCornerCurves1: false,
      drawCornerCurves2: false,

      doubleLoop1: false,
      doubleLoop2: false,
      allLoopEnds: false,
      crossLoops1: false,
      crossLoops2: false,
      crossLoopWithEnds: false,
      downLoopWithEnds: false,
      singleLoopWithEnds1: false,
      singleLoopWithEnds2: false,
      singleLoopWithEnds3: false,
      singleLoopWithEnds4: false
    }
  }
};
