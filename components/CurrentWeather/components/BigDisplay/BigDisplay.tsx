import { Container, Title } from "./BigDisplay.styles";

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

  return (
    <Container>
      <Title>Big Display</Title>
    </Container>
  );
};

export default BigDisplay;
