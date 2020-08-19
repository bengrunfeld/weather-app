import { ApolloServer, gql } from "apollo-server-micro";
import fetch from "isomorphic-unfetch";
import { CurrentWeather, ForecastWeather } from "../../utils/types";
import { baseApiUrl } from "../../utils/endpoints";

const getCurrentWeather = async args => {
  const API_KEY = process.env.API_KEY;
  const url = `${baseApiUrl}/weather?lat=${args.lat}&lon=${args.long}&units=imperial&appid=${API_KEY}`;

  const data = await fetch(url);
  const parsedData = await data.json();

  return parsedData;
};

const getFiveDayForecast = async () => {};

const typeDefs = gql`
  type Coords {
    lon: Float
    lat: Float
  }

  type CurrentWeather {
    city: String
    coords: Coords
    description: String
    feelsLike: String
    humidity: Int
    icon: String
    maxTemp: Float
    minTemp: Float
    pressure: Int
    sunrise: Int
    sunset: Int
    temp: Float
    windSpeed: Float
  }

  type ForecastWeather {
    date: String
    minTemp: Float
    maxTemp: Float
    icon: String
  }

  type Query {
    currentWeather(long: Float!, lat: Float!): CurrentWeather
    fiveDayForecast: [ForecastWeather]
  }
`;

const resolvers = {
  Query: {
    currentWeather: async (parent, args): Promise<Array<CurrentWeather>> => {
      const currentWeatherData = await getCurrentWeather(args);

      console.log(currentWeatherData);

      const {
        coord,
        main: { feels_like, pressure, humidity, temp_min, temp_max, temp },
        name,
        sys: { sunrise, sunset },
        weather: [{ description, icon }],
        wind: { speed },
      } = currentWeatherData;

      return {
        city: name,
        coords: coord,
        description,
        feelsLike: feels_like,
        humidity,
        icon,
        maxTemp: temp_max,
        minTemp: temp_min,
        pressure,
        sunrise,
        sunset,
        temp,
        windSpeed: speed,
      };
    },

    fiveDayForecast: async (parent, args): Promise<Array<ForecastWeather>> =>
      await getFiveDayForecast(),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
