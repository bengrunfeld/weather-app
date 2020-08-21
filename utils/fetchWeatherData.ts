import fetch from "isomorphic-unfetch";
import { baseApiUrl } from "./endpoints";

export const fetchWeatherData = async (coords, dataType, exclude) => {
  const API_KEY = process.env.API_KEY;

  const url = `${baseApiUrl}/${dataType}?lat=${coords.lat}&lon=${coords.long}${
    exclude ? `&exclude=${exclude}` : ""
  }&units=imperial&appid=${API_KEY}`;

  const data = await fetch(url);

  return await data.json();
};
