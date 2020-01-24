import React from "react";
import "@material/checkbox/dist/mdc.checkbox.css";
import "@material/form-field/dist/mdc.form-field.css";
import { Checkbox } from "@rmwc/checkbox";
import { drawColourTile } from "../../helpers/tileFunctions";

const TileSelector = ({
  tileWidth,
  tileHeight,
  strokeThickness,
  tubeColour,
  drawFunction,
  selected,
  onUpdate
}) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const stroke = "#000";
    const fill = "#fff";

    const ctx = canvasRef.current.getContext("2d");
    drawColourTile(ctx, 0, 0, tileWidth, tileHeight, fill);
    drawFunction(
      ctx,
      0,
      0,
      tileWidth,
      tileHeight,
      stroke,
      strokeThickness,
      tubeColour
    );
  });

  return (
    <Checkbox
      checked={selected || false}
      onChange={e => onUpdate(e.target.checked)}
    >
      <canvas ref={canvasRef} width={tileWidth} height={tileHeight} />
    </Checkbox>
  );
};

export default TileSelector;
