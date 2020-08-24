import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

import { Well, PageTitle, NavLink } from "../";
import { WeatherInfo, MaxMinTemp } from "./components";
import {
  Container,
  Title,
  MinMaxContainer,
  TempContainer,
} from "./CurrentWeather.styles";

interface Coords {
  lon: number;
  lat: number;
}

interface Weather {
  city: string;
  coords: Coords;
  description: string;
  feelsLike: number;
  humidity: number;
  icon: string;
  maxTemp: number;
  minTemp: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  windSpeed: number;
}

interface CurrentWeatherType {
  currentWeather: Weather;
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

  const [getCurrentWeather, { called, loading, error, data }] = useLazyQuery<
    CurrentWeatherType
  >(GET_CURRENT_WEATHER, { variables: { long, lat } });

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
      <NavLink href="/five-day-forecast">Five Day Forecast</NavLink>
      <PageTitle city={data.currentWeather.city}>Current Weather</PageTitle>
      <WeatherInfo weatherData={data.currentWeather} />
      <MinMaxContainer>
        <TempContainer>
          <MaxMinTemp temp={data.currentWeather.maxTemp} type="max">
            Max
          </MaxMinTemp>
        </TempContainer>

        <TempContainer>
          <MaxMinTemp temp={data.currentWeather.minTemp} type="min">
            Min
          </MaxMinTemp>
        </TempContainer>
      </MinMaxContainer>
    </Container>
  );
};

export default CurrentWeather;
