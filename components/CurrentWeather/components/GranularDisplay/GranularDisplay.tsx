import { Container, DataItem, Name, Value } from "./GranularDisplay.styles";

const GranularDisplay = ({ weatherData }) => {
  const { humidity, pressure, sunrise, sunset, windSpeed } = weatherData;

  const formatDate = timestamp => {
    return new Date(timestamp * 1000)
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  };

  return (
    <Container>
      <DataItem>
        <Name>Pressure:</Name> <Value>{pressure}</Value>
      </DataItem>
      <DataItem>
        <Name>Humidity:</Name> <Value>{humidity}</Value>
      </DataItem>
      <DataItem>
        <Name>Wind Speed:</Name>
        <Value>{windSpeed}</Value>
      </DataItem>
      <DataItem>
        <Name>Sunrise:</Name> <Value>{formatDate(sunrise)}</Value>
      </DataItem>
      <DataItem>
        <Name>Sunset:</Name> <Value>{formatDate(sunset)}</Value>
      </DataItem>
    </Container>
  );
};

export default GranularDisplay;
