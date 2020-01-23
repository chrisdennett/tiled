import React, { useState } from "react";
import styled from "styled-components";
// comps
import TabControls from "./tabControls/TabControls";
import TileSizeControls from "./tileSizeControls/TileSizeControls";
import GroutControls from "./groutControls/GroutControls";

const Controls = ({ appData, onUpdate }) => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <Container>
      <TabControls activeTab={activeTab} onUpdate={setActiveTab} />

      {activeTab === 1 && (
        <TileSizeControls appData={appData} onUpdate={onUpdate} />
      )}

      {activeTab === 2 && (
        <GroutControls appData={appData} onUpdate={onUpdate} />
      )}
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  padding-top: 5px;
  background: black;
  color: white;
`;

const SlicerHolder = styled.div`
  padding: 0 15px;
`;
