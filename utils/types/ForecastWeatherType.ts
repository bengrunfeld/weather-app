import { Weather, Daily, Temp } from "./CommonTypes";

export interface ForecastWeatherType {
  lat: number;
  lon: number;
  timezone: string;
  daily: Daily;
}
