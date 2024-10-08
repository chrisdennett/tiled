import React from "react";
import styled from "styled-components";
// comps
import SliderControl from "../sliderControl/SliderControl";
import { SwitchControl } from "../switchControl/SwitchControl";

const TileSizeControls = ({ appData, onUpdate }) => {
  const { settings } = appData;
  const { tileWidth, tileHeight } = settings;

  const updateRange = (key, newValue) => {
    const newSetting = { ...settings[key], value: newValue };
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newSetting }
    });
  };

  const updateMultipleRanges = (key1, key2, newValue) => {
    const newSetting1 = { ...settings[key1], value: newValue };
    const newSetting2 = { ...settings[key2], value: newValue };
    onUpdate({
      ...appData,
      settings: { ...settings, [key1]: newSetting1, [key2]: newSetting2 }
    });
  };

  const updateBoolean = (key, newValue) => {
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newValue }
    });
  };

  return (
    <Container>
      <SwitchControl
        label={"Separate Width and Height"}
        defaultChecked={settings.separateWidthAndHeight}
        checked={settings.separateWidthAndHeight}
        onUpdate={value => updateBoolean("separateWidthAndHeight", value)}
      />

      {settings.separateWidthAndHeight ? (
        <>
          <SliderControl
            labelStyle={{ minWidth: 150 }}
            label={"Tile Width:"}
            displayValue={true}
            step={1}
            min={tileWidth.min}
            max={tileWidth.max}
            value={tileWidth.value}
            onChange={value => updateRange("tileWidth", value)}
          />
          <SliderControl
            labelStyle={{ minWidth: 150 }}
            label={"Tile Height:"}
            displayValue={true}
            step={1}
            min={tileHeight.min}
            max={tileHeight.max}
            value={tileHeight.value}
            onChange={value => updateRange("tileHeight", value)}
          />
        </>
      ) : (
        <SliderControl
          labelStyle={{ minWidth: 150 }}
          label={"Tile Size:"}
          displayValue={true}
          step={1}
          min={tileWidth.min}
          max={tileWidth.max}
          value={tileWidth.value}
          onChange={value =>
            updateMultipleRanges("tileWidth", "tileHeight", value)
          }
        />
      )}
    </Container>
  );
};

export default TileSizeControls;

const Container = styled.div`
  height: 100%;
  color: white;
`;
