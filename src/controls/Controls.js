import React, { useState } from "react";
import styled from "styled-components";
// comps
import TabControls from "./tabControls/TabControls";
import TileTypeControls from "./tileTypeControls/TileTypeControls";
import TileSizeControls from "./tileSizeControls/TileSizeControls";
import GroutControls from "./groutControls/GroutControls";

const Controls = ({ appData, onUpdate }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <TabControls activeTab={activeTab} onUpdate={setActiveTab} />

      <ControlsUI>
        {activeTab === 0 && (
          <TileTypeControls appData={appData} onUpdate={onUpdate} />
        )}

        {activeTab === 1 && (
          <TileSizeControls appData={appData} onUpdate={onUpdate} />
        )}

        {activeTab === 2 && (
          <GroutControls appData={appData} onUpdate={onUpdate} />
        )}
      </ControlsUI>
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  padding-top: 5px;
  background: black;
  color: white;
`;

const ControlsUI = styled.div`
  margin: 15px;
`;
