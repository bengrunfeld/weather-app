import { useContext } from "react";
import { UnitContext } from "../../pages/_app";
import { CELSIUS, FAHRENHEIT } from "../../utils/constants";

import { Container, Divider, Unit } from "./UnitPicker.styles";

const UnitPicker = () => {
  const { unit, updateUnit } = useContext(UnitContext);

  const handleUnitChange = selection => {
    if (selection === CELSIUS && unit === CELSIUS) return false;
    if (selection === FAHRENHEIT && unit === FAHRENHEIT) return false;

    updateUnit(selection);
  };

  return (
    <Container>
      <Unit
        nonActive={unit === CELSIUS}
        onClick={() => handleUnitChange(CELSIUS)}
      >
        C
      </Unit>
      <Divider>/</Divider>
      <Unit
        nonActive={unit === FAHRENHEIT}
        onClick={() => handleUnitChange(FAHRENHEIT)}
      >
        F
      </Unit>
    </Container>
  );
};

export default UnitPicker;
