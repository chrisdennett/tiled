import React, { useEffect } from "react";
import styled from "styled-components";
import { drawColourTile, drawRandomTile, drawTileGrout } from "./tileFunctions";

const Display = ({ sizeInfo, appData }) => {
  const canvasRef = React.useRef(null);
  const { settings } = appData;

  useEffect(() => {
    update();
  });

  const update = () => {
    drawTiles(canvasRef.current, sizeInfo.width, sizeInfo.height, settings);
  };

  return (
    <Container>
      <CanvasHolder left={0} top={0}>
        <canvas ref={canvasRef} onClick={update} />
      </CanvasHolder>
    </Container>
  );
};

export default Display;

// STYLING
const CanvasHolder = styled.div`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  line-height: 0;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Container = styled.div`
  background: black;
  width: 100%;
  height: 100%;
`;

// FUNCTIONS
const drawTiles = (canvas, width, height, settings) => {
  if (!canvas) return;

  // fill screen with tiles
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, width, height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // tile size - could be user defined perhaps
  const {
    tileWidth,
    tileHeight,
    selectedTiles,
    strokeColour,
    fillColour,
    tubeColour,
    strokeThickness,
    groutThickness
  } = settings;

  // only want ids not set to false
  if (!selectedTiles) return;
  const tileOptions = Object.keys(selectedTiles).filter(
    id => selectedTiles[id] !== false
  );

  if (tileOptions.length > 0) {
    const widthIncGrout = tileWidth + groutThickness;
    const heightIncGrout = tileHeight + groutThickness;

    //ctx.beginPath();

    for (let x = 0; x < width; x += widthIncGrout) {
      for (let y = 0; y < height; y += heightIncGrout) {
        if (groutThickness > 0) {
          drawTileGrout(ctx, x, y, tileWidth, tileHeight, "#000");
        }
      }
    }

    ctx.clip();

    for (let x = 0; x < width; x += widthIncGrout) {
      for (let y = 0; y < height; y += heightIncGrout) {
        // const randColourSet = getRandomBlackAndWhiteSet();
        drawColourTile(ctx, x, y, tileWidth, tileHeight, fillColour);
      }
    }

    for (let x = 0; x < width; x += widthIncGrout) {
      for (let y = 0; y < height; y += heightIncGrout) {
        // const randColourSet = getRandomBlackAndWhiteSet();
        drawRandomTile(
          tileOptions,
          ctx,
          x,
          y,
          tileWidth,
          tileHeight,
          strokeColour,
          strokeThickness,
          tubeColour
        );
      }
    }
  }
};
