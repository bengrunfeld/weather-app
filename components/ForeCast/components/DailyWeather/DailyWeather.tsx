import { Day } from "../";
import { iconImgUrl } from "../../../../utils/endpoints";
import {
  Container,
  Description,
  HiLo,
  Icon,
  IconContainer,
  Temp,
  Title,
} from "./DailyWeather.styles";

const DailyWeather = ({ weatherData }) => {
  const {
    dt,
    temp: { day, max, min },
    weather: [{ description, icon }],
  } = weatherData;

  return (
    <Container>
      <Day dt={dt} />
      <IconContainer>
        <Icon src={`${iconImgUrl}/${icon}@2x.png`} />
      </IconContainer>
      <HiLo>
        <Title>Hi:</Title>
        <Temp>{max.toFixed(1)}&#176;</Temp>
      </HiLo>
      <HiLo>
        <Title>Low:</Title>
        <Temp>{min.toFixed(1)}&#176;</Temp>
      </HiLo>
      <Description>{description}</Description>
    </Container>
  );
};

export default DailyWeather;
