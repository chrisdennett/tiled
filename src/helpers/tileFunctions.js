export const getRandomColour = (saturation = 80, lightness = 40) => {
  const hue = Math.floor(Math.random() * 256);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const getRandomColourSet = () => {
  const hue = Math.floor(Math.random() * 360);
  return [`hsl(${hue}, 60%, 60%)`, `hsl(${hue}, 40%, 90%)`];
};

export const getRandomBlackAndWhiteSet = () => {
  return Math.random() < 0.5 ? ["#6c6c6c", "#fff"] : ["#fff", "#6c6c6c"];
};

export const drawRandomTile = (
  tileKeys,
  ctx,
  x,
  y,
  width,
  height,
  stroke,
  strokeThickness,
  tubeColour
) => {
  const randIndex = Math.floor(Math.random() * tileKeys.length);
  const randKey = tileKeys[randIndex];
  const tileFunction = tileOptions[randKey];
  tileFunction(ctx, x, y, width, height, stroke, strokeThickness, tubeColour);
};

export const drawColourTile = (ctx, x, y, width, height, color) => {
  ctx.save();
  ctx.fillStyle = color === "random" ? getRandomColour(75, 35) : color;
  //ctx.fillStyle = getRandomColour(75, 35);

  ctx.fillRect(x, y, width, height);
  ctx.restore();
};

export const drawTileGrout = (
  ctx,
  x,
  y,
  width,
  height,
  cornerRadiusDecimal
) => {
  const cornerRadius = (width / 2) * cornerRadiusDecimal;

  ctx.moveTo(x, y + cornerRadius);
  ctx.lineTo(x, y + height - cornerRadius);
  ctx.arcTo(x, y + height, x + cornerRadius, y + height, cornerRadius);
  ctx.lineTo(x + width - cornerRadius, y + height);
  ctx.arcTo(
    x + width,
    y + height,
    x + width,
    y + height - cornerRadius,
    cornerRadius
  );
  ctx.lineTo(x + width, y + cornerRadius);
  ctx.arcTo(x + width, y, x + width - cornerRadius, y, cornerRadius);
  ctx.lineTo(x + cornerRadius, y);
  ctx.arcTo(x, y, x, y + cornerRadius, cornerRadius);
};

export const drawCross = (ctx, x, y, width, height, color, strokeThickness) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  ctx.save();
  ctx.beginPath();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;

  ctx.moveTo(x, y + halfHeight);
  ctx.lineTo(x + width, y + halfHeight);

  ctx.moveTo(x + halfWidth, y);
  ctx.lineTo(x + halfWidth, y + height);

  ctx.stroke();
  ctx.restore();
};

export const drawCornerCurves1 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness
) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;

  ctx.moveTo(x, y + halfHeight);
  ctx.quadraticCurveTo(x + halfWidth, y + halfHeight, x + halfWidth, y);

  ctx.moveTo(x + halfWidth, y + height);
  ctx.quadraticCurveTo(
    x + halfWidth,
    y + halfHeight,
    x + width,
    y + halfHeight
  );

  ctx.stroke();
  ctx.restore();
};

export const drawCornerCurves2 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness
) => {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;

  ctx.moveTo(x, y + halfHeight);
  ctx.quadraticCurveTo(
    x + halfWidth,
    y + halfHeight,
    x + halfWidth,
    y + height
  );

  ctx.moveTo(x + halfWidth, y);
  ctx.quadraticCurveTo(
    x + halfWidth,
    y + halfHeight,
    x + width,
    y + halfHeight
  );

  ctx.stroke();
  ctx.restore();
};

export const diagonal1 = (ctx, x, y, width, height, color, strokeThickness) => {
  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;

  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y + height);

  ctx.stroke();
  ctx.restore();
};

export const diagonal2 = (ctx, x, y, width, height, color, strokeThickness) => {
  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;

  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width, y);

  ctx.stroke();
  ctx.restore();
};

export const doubleLoop1 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // curve 1 fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // curve 1 stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y);
  ctx.stroke();

  // curve 2 fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y + height);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // curve 2 stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y + height);
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x, y + twoThirdH);
  ctx.stroke();

  ctx.restore();
};

export const doubleLoop2 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // curve 1 fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x, y + oneThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // curve 1 stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x, y + oneThirdH);
  ctx.moveTo(x, y + twoThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + twoThirdW, y);
  ctx.stroke();

  // curve 2 fill
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x + oneThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // curve 2 stroke
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x + oneThirdW, y + height);
  ctx.moveTo(x + twoThirdW, y + height);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.stroke();

  ctx.restore();
};

export const crossLoops1 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // down fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // down stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.moveTo(x + twoThirdW, y);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.stroke();

  // across fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.lineTo(x + width, y + twoThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // across stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.moveTo(x + width, y + twoThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.stroke();

  ctx.restore();
};

export const crossLoops2 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // across fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.lineTo(x + width, y + twoThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // across stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.moveTo(x + width, y + twoThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.stroke();

  // down fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // down stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.moveTo(x + twoThirdW, y);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.stroke();

  ctx.restore();
};

export const singleLoopWithEnds1 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // curve 1 fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // curve 1 stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y);
  ctx.stroke();

  // bottom fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.closePath();
  ctx.fill();

  // bottom stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.stroke();

  // left fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // left stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.stroke();

  ctx.restore();
};

export const singleLoopWithEnds2 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // curve 2 fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y + height);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // curve 2 stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + oneThirdH, x + twoThirdW, y + height);
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.quadraticCurveTo(x + oneThirdW, y + twoThirdH, x, y + twoThirdH);
  ctx.stroke();

  // top fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.closePath();
  ctx.fill();

  // top stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.stroke();

  // right fill
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // right stroke
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.stroke();

  ctx.restore();
};

export const singleLoopWithEnds3 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // curve 1 fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x, y + oneThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // curve 1 stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x, y + oneThirdH);
  ctx.moveTo(x, y + twoThirdH);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + twoThirdW, y);
  ctx.stroke();

  // bottom fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.closePath();
  ctx.fill();

  // bottom stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.stroke();

  // right fill
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // right stroke
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.stroke();

  ctx.restore();
};

export const singleLoopWithEnds4 = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // curve 2 fill
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x + oneThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // curve 2 stroke
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.quadraticCurveTo(x + oneThirdW, y + oneThirdH, x + oneThirdW, y + height);
  ctx.moveTo(x + twoThirdW, y + height);
  ctx.quadraticCurveTo(x + twoThirdW, y + twoThirdH, x + width, y + twoThirdH);
  ctx.stroke();

  // top fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.closePath();
  ctx.fill();

  // top stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.stroke();

  // left fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // left stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.stroke();

  ctx.restore();
};

export const allLoopEnds = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // top fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.closePath();
  ctx.fill();

  // top stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.stroke();

  // bottom fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.closePath();
  ctx.fill();

  // bottom stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.stroke();

  // left fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // left stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.stroke();

  // right fill
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // right stroke
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.stroke();

  ctx.restore();
};

export const downLoopWithEnds = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // down fill
  ctx.moveTo(x + oneThirdW, y);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.lineTo(x + twoThirdW, y);
  ctx.closePath();
  ctx.fill();

  // down stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.lineTo(x + oneThirdW, y + height);
  ctx.moveTo(x + twoThirdW, y);
  ctx.lineTo(x + twoThirdW, y + height);
  ctx.stroke();

  // left fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // left stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + oneThirdW,
    y + twoThirdH,
    x,
    y + twoThirdH
  );
  ctx.stroke();

  // right fill
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.closePath();
  ctx.fill();

  // right stroke
  ctx.beginPath();
  ctx.moveTo(x + width, y + oneThirdH);
  ctx.bezierCurveTo(
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + width,
    y + twoThirdH
  );
  ctx.stroke();

  ctx.restore();
};

export const crossLoopWithEnds = (
  ctx,
  x,
  y,
  width,
  height,
  color,
  strokeThickness,
  tubeColour
) => {
  const oneThirdW = width / 3;
  const oneThirdH = height / 3;
  const twoThirdW = oneThirdW * 2;
  const twoThirdH = oneThirdH * 2;

  ctx.beginPath();
  ctx.save();

  ctx.lineWidth = strokeThickness;
  ctx.strokeStyle = color === "random" ? getRandomColour() : color;
  ctx.fillStyle = tubeColour === "random" ? getRandomColour() : tubeColour;

  // across fill
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.lineTo(x + width, y + twoThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.closePath();
  ctx.fill();

  // across stroke
  ctx.beginPath();
  ctx.moveTo(x, y + oneThirdH);
  ctx.lineTo(x + width, y + oneThirdH);
  ctx.moveTo(x + width, y + twoThirdH);
  ctx.lineTo(x, y + twoThirdH);
  ctx.stroke();

  // top fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.closePath();
  ctx.fill();

  // top stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y + oneThirdH,
    x + twoThirdW,
    y
  );
  ctx.stroke();

  // bottom fill
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.closePath();
  ctx.fill();

  // bottom stroke
  ctx.beginPath();
  ctx.moveTo(x + oneThirdW, y + height);
  ctx.bezierCurveTo(
    x + oneThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + twoThirdH,
    x + twoThirdW,
    y + height
  );
  ctx.stroke();

  ctx.restore();
};

export const tileOptions1 = {
  drawCornerCurves1: drawCornerCurves1,
  drawCornerCurves2: drawCornerCurves2,
  drawCross: drawCross
};

export const tileOptions = {
  diagonal1: diagonal1,
  diagonal2: diagonal2,
  drawCornerCurves1: drawCornerCurves1,
  drawCornerCurves2: drawCornerCurves2,
  drawCross: drawCross,
  doubleLoop1: doubleLoop1,
  doubleLoop2: doubleLoop2,
  allLoopEnds: allLoopEnds,
  crossLoops1: crossLoops1,
  crossLoops2: crossLoops2,
  crossLoopWithEnds: crossLoopWithEnds,
  downLoopWithEnds: downLoopWithEnds,
  singleLoopWithEnds1: singleLoopWithEnds1,
  singleLoopWithEnds2: singleLoopWithEnds2,
  singleLoopWithEnds3: singleLoopWithEnds3,
  singleLoopWithEnds4: singleLoopWithEnds4
};
