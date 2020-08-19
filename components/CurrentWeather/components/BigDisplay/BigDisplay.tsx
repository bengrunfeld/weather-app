import { iconImgUrl } from "../../../../utils/endpoints";

import {
  Container,
  Title,
  Icon,
  IconAndTemp,
  TempAndFeel,
  Temp,
  Feel,
  Description,
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
    temp,
    windSpeed,
  } = weatherData;

  return (
    <Container>
      <IconAndTemp>
        <Icon src={`${iconImgUrl}/${icon}@2x.png`} />
        <TempAndFeel>
          <Temp>{temp}&#176;</Temp>
          <Feel>Feels like: {feelsLike}&#176;</Feel>
        </TempAndFeel>
      </IconAndTemp>
      <Description>{description}</Description>
    </Container>
  );
};

export default BigDisplay;
