import {
  Coord,
  Weather,
  WeatherArr,
  Main,
  Wind,
  Clouds,
  Sys,
} from "./CommonTypes";

export interface CurrentWeather {
  coord: Coord;
  weather: Weather;
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
