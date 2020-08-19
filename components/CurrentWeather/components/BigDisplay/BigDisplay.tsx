import { iconImgUrl } from "../../../../utils/endpoints";

import {
  Container,
  Title,
  Icon,
  IconAndTemp,
  TempAndFeel,
} from "./BigDisplay.styles";

const BigDisplay = ({ weatherData }) => {
  const {
    city,
    coords,
    description,
    feelsLike,
    humidity,
    icon,
    maxTemp,
    minTemp,
    pressure,
    sunrise,
    sunset,
    windSpeed,
  } = weatherData;

  console.log("\n-->> ", weatherData);

  return (
    <Container>
      <IconAndTemp>
        <Icon src={`${iconImgUrl}/${icon}@2x.png`} />
        <TempAndFeel></TempAndFeel>
      </IconAndTemp>
    </Container>
  );
};

export default BigDisplay;
