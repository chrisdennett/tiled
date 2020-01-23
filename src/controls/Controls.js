import React from "react";
import styled from "styled-components";
// comps
import SliderControl from "./sliderControl/SliderControl";
import { SwitchControl } from "./switchControl/SwitchControl";

const Controls = ({ appData, onUpdate }) => {
  const { settings } = appData;
  const { testRange } = settings;

  const updateSettings = (key, newValue) => {
    const newSetting = { ...settings[key], value: newValue };
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newSetting }
    });
  };

  const updateSelectedTiles = (key, value) => {};

  return (
    <Container>
      <SwitchControl
        checked={settings.selectedTiles.diagonal1}
        onUpdate={value => updateSelectedTiles("diagonal1", value)}
      />
      <SlicerHolder>
        <SliderControl
          labelStyle={{ minWidth: 150 }}
          label={"TileSize:"}
          displayValue={true}
          step={1}
          min={testRange.min}
          max={testRange.max}
          value={testRange.value}
          onChange={value => updateSettings("testRange", value)}
        />
      </SlicerHolder>
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
  padding: 0 10px;
`;
