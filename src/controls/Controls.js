import React from "react";
import styled from "styled-components";
// comps
import TileSizeControls from "./tileSizeControls/TileSizeControls";

const Controls = ({ appData, onUpdate }) => {
  return (
    <Container>
      <TileSizeControls appData={appData} onUpdate={onUpdate} />
    </Container>
  );
};

export default Controls;

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
`;

const SlicerHolder = styled.div`
  padding: 0 15px;
`;
