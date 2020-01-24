import React from "react";
import styled from "styled-components";
// comps
import TileSelector from "../tileSelector/TileSelector";
import { tileOptions } from "../../helpers/tileFunctions";

const TileOptions = ({ tileKeys, appData, onUpdate }) => {
  const { settings } = appData;
  const { selectedTiles, tubeColour, strokeThickness } = settings;

  const onTileUpdate = (key, selected) => {
    const newSelectedTiles = { ...settings.selectedTiles };
    newSelectedTiles[key] = selected;

    const newSettings = { ...settings, selectedTiles: newSelectedTiles };

    onUpdate({
      ...appData,
      settings: newSettings
    });
  };

  return (
    <Container>
      {tileKeys.map(key => {
        return (
          <TileSelectorHolder key={key}>
            <TileSelector
              tileWidth={40}
              tileHeight={40}
              tubeColour={tubeColour}
              strokeThickness={strokeThickness}
              drawFunction={tileOptions[key]}
              selected={selectedTiles[key]}
              onUpdate={isChecked => onTileUpdate(key, isChecked)}
            />
          </TileSelectorHolder>
        );
      })}
    </Container>
  );
};

export default TileOptions;

const Container = styled.div`
  display: inline-block;
`;

const TileSelectorHolder = styled.div`
  margin: 20px 20px 0 0;
  display: inline-block;
`;
