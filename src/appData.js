export const defaultAppData = {
  title: "Tiles",
  infoUrl: "https://tiled.artfly.io/",
  settings: {
    isSquare: true,
    tileWidth: {
      type: "range",
      min: 50,
      max: 300,
      value: 100
    },
    tileHeight: {
      type: "range",
      min: 50,
      max: 300,
      value: 100
    },
    groutThickness: {
      type: "range",
      min: 0,
      max: 40,
      value: 3
    },
    tileCornerRoundness: {
      type: "range",
      step: 0.01,
      min: 0,
      max: 1,
      value: 0.17
    },
    selectedTiles: {
      diagonal1: false,
      diagonal2: false,

      drawCornerCurves1: false,
      drawCornerCurves2: false,
      drawCross: false,

      doubleLoop1: true,
      doubleLoop2: true,
      allLoopEnds: true,
      crossLoops1: true,
      crossLoops2: true,
      crossLoopWithEnds: true,
      downLoopWithEnds: true,

      singleLoopWithEnds1: false,
      singleLoopWithEnds2: false,
      singleLoopWithEnds3: false,
      singleLoopWithEnds4: false
    },
    showGrid: true,
    strokeColour: "#000",
    fillColour: "#fff",
    tubeColour: "#fff",
    strokeThickness: 2
  }
};
