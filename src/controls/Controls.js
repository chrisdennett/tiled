import React, { useState } from "react";
import styled from "styled-components";
import { saveAs } from "file-saver";
import "@material/button/dist/mdc.button.css";
import { Button } from "@rmwc/button";
// comps
import TabControls from "./tabControls/TabControls";
import TileTypeControls from "./tileTypeControls/TileTypeControls";
import TileSizeControls from "./tileSizeControls/TileSizeControls";
import StyleControls from "./styleControls/StyleControls";
import GroutControls from "./groutControls/GroutControls";

const Controls = ({ appData, onUpdate }) => {
  const [activeTab, setActiveTab] = useState(2);

  const onSaveSvgClick = ({ name = "tiles-art", svgClass = "mainSVG" }) => {
    let full_svg = document.getElementsByClassName(svgClass)[0].outerHTML;
    full_svg = full_svg.split(">").join(`>`);

    var blob = new Blob([full_svg], { type: "image/svg+xml" });
    saveAs(blob, `artfly-${name}.svg`);
  };

  return (
    <Container>
      <TabControls activeTab={activeTab} onUpdate={setActiveTab} />

      <ControlsUI>
        {/* <ButtHolder>
          <Button label="Save SVG" raised onClick={onSaveSvgClick} />
        </ButtHolder> */}

        {activeTab === 0 && (
          <TileTypeControls appData={appData} onUpdate={onUpdate} />
        )}

        {activeTab === 1 && (
          <TileSizeControls appData={appData} onUpdate={onUpdate} />
        )}

        {activeTab === 2 && (
          <StyleControls appData={appData} onUpdate={onUpdate} />
        )}

        {activeTab === 3 && (
          <GroutControls appData={appData} onUpdate={onUpdate} />
        )}
      </ControlsUI>
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  padding-top: 5px;
  color: white;
`;

const ControlsUI = styled.div`
  margin: 15px;
`;

const ButtHolder = styled.div`
  margin: 5px;
`;
