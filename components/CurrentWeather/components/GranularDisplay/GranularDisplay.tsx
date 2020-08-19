import { Container, Title } from "./GranularDisplay.styles";

const GranularDisplay = ({ weatherData }) => {
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

  return (
    <Container>
      <Title>GranularDisplay</Title>
    </Container>
  );
};

export default GranularDisplay;
