import React from "react";
import styled from "styled-components";
// comps
import QuickSelectMenu from "../../components/QuickSelectMenu";
import TileOptions from "../tileOptions/TileOptions";

const TileTypeControls = ({ appData, onUpdate }) => {
  const { settings } = appData;
  const { currentPreset, presets } = settings;

  const updatePreset = optionKey => {
    // create new settings object
    const updatedSettings = { ...settings };

    // update the currentPreset
    updatedSettings.currentPreset = optionKey;

    // get the preset data
    const newPresetData = updatedSettings.presets[optionKey];

    // Set all keys to false unless in preset
    const allTileKeys = Object.keys(settings.selectedTiles);

    for (const key of allTileKeys) {
      if (newPresetData.keys.includes(key)) {
        updatedSettings.selectedTiles[key] = true;
      } else {
        updatedSettings.selectedTiles[key] = false;
      }
    }

    onUpdate({
      ...appData,
      settings: updatedSettings
    });
  };

  const currentPresetData = settings.presets[currentPreset];

  return (
    <Container>
      <QuickSelectMenu
        currentOptionKey={currentPreset}
        options={presets}
        onUpdate={updatePreset}
      />
      <TileOptions
        tileKeys={currentPresetData.keys}
        appData={appData}
        onUpdate={onUpdate}
      />
      <Description>
        <strong>{currentPresetData.name}: </strong>
        {currentPresetData.description}
      </Description>
    </Container>
  );
};

export default TileTypeControls;

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;
