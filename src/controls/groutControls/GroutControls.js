import React from "react";
import styled from "styled-components";
// comps
import SliderControl from "../sliderControl/SliderControl";

const GroutControls = ({ appData, onUpdate }) => {
  const { settings } = appData;
  const { groutThickness, tileCornerRoundness } = settings;

  const updateRange = (key, newValue) => {
    const newSetting = { ...settings[key], value: newValue };
    onUpdate({
      ...appData,
      settings: { ...settings, [key]: newSetting }
    });
  };

  return (
    <Container>
      <SliderControl
        labelStyle={{ minWidth: 150 }}
        displayValue={true}
        label={"Grout Thickness"}
        step={1}
        min={groutThickness.min}
        max={groutThickness.max}
        value={groutThickness.value}
        onChange={value => updateRange("groutThickness", value)}
      />
      <SliderControl
        displayValue={true}
        disabled={groutThickness.value <= 0}
        labelStyle={{ minWidth: 150 }}
        label={"Corner Roundness"}
        step={tileCornerRoundness.step || 1}
        min={tileCornerRoundness.min}
        max={tileCornerRoundness.max}
        value={tileCornerRoundness.value}
        onChange={value => updateRange("tileCornerRoundness", value)}
      />
    </Container>
  );
};

export default GroutControls;

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
`;
