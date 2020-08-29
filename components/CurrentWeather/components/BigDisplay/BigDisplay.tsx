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
  IconContainer,
} from "./BigDisplay.styles";

const BigDisplay = ({ weatherData }) => {
  const { description, feelsLike, icon, temp } = weatherData;

  return (
    <Container>
      <IconAndTemp>
        <IconContainer>
          <Icon src={`${iconImgUrl}/${icon}@2x.png`} />
        </IconContainer>
        <TempAndFeel>
          <Temp>{temp.toFixed(1)}&#176;</Temp>
          <Feel>Feels like: {feelsLike.toFixed(1)}&#176;</Feel>
        </TempAndFeel>
      </IconAndTemp>
      <Description>Conditions: {description}</Description>
    </Container>
  );
};

export default BigDisplay;
