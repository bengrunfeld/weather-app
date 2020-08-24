import {
  Coord,
  Weather,
  WeatherArr,
  Main,
  Wind,
  Clouds,
  Sys,
} from "./CommonTypes";

export interface CurrentWeatherType {
  city: string;
  coords: Coord;
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
