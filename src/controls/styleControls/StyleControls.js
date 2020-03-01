import React from "react";
import styled from "styled-components";
// comps
import SliderControl from "../sliderControl/SliderControl";
import ColourPicker from "../../components/colourPicker/ColourPicker";

const StyleControls = ({ appData, onUpdate }) => {
  const { settings } = appData;
  const { strokeThickness, strokeColour, fillColour, tubeColour } = settings;

  const updateRange = (key, newValue) => {
    const newSetting = { ...settings[key], value: newValue };
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newSetting }
    });
  };

  const updateValue = (key, newValue) => {
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newValue }
    });
  };

  return (
    <Container>
      <SliderControl
        labelStyle={{ minWidth: 150 }}
        label={"Line Thickness:"}
        displayValue={false}
        step={1}
        min={strokeThickness.min}
        max={strokeThickness.max}
        value={strokeThickness.value}
        onChange={value => updateRange("strokeThickness", value)}
      />
      <ColourPicker
        colour={strokeColour}
        label={"Line"}
        onChange={value => updateValue("strokeColour", value)}
      />

      <ColourPicker
        colour={fillColour}
        label={"Background"}
        onChange={value => updateValue("fillColour", value)}
      />

      <ColourPicker
        colour={tubeColour}
        label={"Tube (worm?)"}
        onChange={value => updateValue("tubeColour", value)}
      />
    </Container>
  );
};

export default StyleControls;

const Container = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-wrap: wrap;
`;
