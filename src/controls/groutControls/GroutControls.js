import React from "react";
import styled from "styled-components";
import { TiWarning } from "react-icons/ti";
// comps
import SliderControl from "../sliderControl/SliderControl";
import { SwitchControl } from "../switchControl/SwitchControl";

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
      <p>
        <TiWarning /> WARNING! This can make things go super slow - especially
        if you have loads of little tiles.
      </p>

      <SwitchControl
        label={"Add Grout"}
        defaultChecked={groutThickness.value > 0}
        checked={groutThickness.value > 0}
        onUpdate={value => updateRange("groutThickness", value ? 4 : 0)}
      />

      {groutThickness.value > 0 && (
        <>
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
        </>
      )}
    </Container>
  );
};

export default GroutControls;

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
`;
