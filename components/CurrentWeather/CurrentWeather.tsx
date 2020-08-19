import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Well, PageTitle } from "../";
import { WeatherInfo } from "./components";
import { Container, Title } from "./CurrentWeather.styles";

interface CurrentWeather {
  id: ID;
  city: String;
}

const GET_CURRENT_WEATHER = gql`
  query CurrentWeather($long: Float!, $lat: Float!) {
    currentWeather(long: $long, lat: $lat) {
      city
      coords {
        lon
        lat
      }
      description
      feelsLike
      humidity
      icon
      maxTemp
      minTemp
      pressure
      sunrise
      sunset
      temp
      windSpeed
    }
  }
`;

const CurrentWeather = ({ location }) => {
  const { long, lat } = location;

  const [
    getCurrentWeather,
    { called, loading, error, data },
  ] = useLazyQuery(GET_CURRENT_WEATHER, { variables: { long, lat } });

  useEffect(() => {
    getCurrentWeather();
  }, []);

  if ((called && loading) || !data)
    return (
      <Container>
        <Well>
          <Title>Loading...</Title>
        </Well>
      </Container>
    );

  return (
    <Container>
      <PageTitle city={data.currentWeather.city}>Current Weather</PageTitle>
      <WeatherInfo weatherData={data.currentWeather} />
    </Container>
  );
};

export default CurrentWeather;
