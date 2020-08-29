import { useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

import { UnitContext } from "../../pages/_app";

import toCelsius from "../../utils/toCelsius";
import { FAHRENHEIT } from "../../utils/constants";

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

const convertToCelsius = data => {
  const {
    currentWeather: {
      city,
      coords,
      description,
      feelsLike,
      humidity,
      icon,
      pressure,
      sunrise,
      sunset,
      windSpeed,
    },
  } = data;

  const celsiusObj = {
    city,
    coords,
    description,
    feelsLike: toCelsius(data.currentWeather.feelsLike),
    humidity,
    icon,
    maxTemp: toCelsius(data.currentWeather.maxTemp),
    minTemp: toCelsius(data.currentWeather.minTemp),
    pressure,
    sunrise,
    sunset,
    temp: toCelsius(data.currentWeather.temp),
    windSpeed,
  };

  return { currentWeather: celsiusObj };
};

const CurrentWeather = ({ location }) => {
  const { long, lat } = location;

  const [getCurrentWeather, { called, loading, error, data }] = useLazyQuery<
    CurrentWeatherType
  >(GET_CURRENT_WEATHER, { variables: { long, lat } });

  const { unit } = useContext(UnitContext);

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

  const dataObj = unit === FAHRENHEIT ? data : convertToCelsius(data);

  return (
    <Container>
      <NavLink href="/five-day-forecast">Five Day Forecast</NavLink>
      <PageTitle city={dataObj.currentWeather.city}>Current Weather</PageTitle>
      <WeatherInfo weatherData={dataObj.currentWeather} />
      <MinMaxContainer>
        <TempContainer>
          <MaxMinTemp temp={dataObj.currentWeather.maxTemp} type="max">
            Max
          </MaxMinTemp>
        </TempContainer>

        <TempContainer>
          <MaxMinTemp temp={dataObj.currentWeather.minTemp} type="min">
            Min
          </MaxMinTemp>
        </TempContainer>
      </MinMaxContainer>
    </Container>
  );
};

export default CurrentWeather;
