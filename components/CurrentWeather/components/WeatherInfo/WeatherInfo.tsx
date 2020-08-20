import { BigDisplay, GranularDisplay } from "../";

import { Container, MinMaxContainer } from "./WeatherInfo.styles";

const WeatherInfo = ({ weatherData }) => (
  <Container>
    <BigDisplay weatherData={weatherData} />
    <GranularDisplay weatherData={weatherData} />
  </Container>
);

export default WeatherInfo;
