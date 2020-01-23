import React from "react";
import styled from "styled-components";
// comps
import QuickSelectMenu from "../../components/QuickSelectMenu";

const TileTypeControls = ({ appData, onUpdate }) => {
  const { settings } = appData;
  const { currentPreset, presets } = settings;

  const updatePreset = optionKey => {
    onUpdate({
      ...appData,
      settings: { ...settings, currentPreset: optionKey }
    });
  };

  return (
    <Container>
      <QuickSelectMenu
        currentOptionKey={currentPreset}
        options={presets}
        onUpdate={updatePreset}
      />
    </Container>
  );
};

export default TileTypeControls;

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
`;
