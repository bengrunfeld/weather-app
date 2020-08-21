import { ApolloServer, gql } from "apollo-server-micro";
import { CurrentWeather, ForecastWeather } from "../../utils/types";
import { baseApiUrl } from "../../utils/endpoints";
import { fetchWeatherData } from "../../utils/fetchWeatherData";

const getCurrentWeather = async args => await fetchWeatherData(args, "weather");

const getFiveDayForecast = async args =>
  await fetchWeatherData(args, "onecall", "current,hourly,minutely");

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

  type Temp {
    day: Float
    min: Float
    max: Float
    night: Float
    eve: Float
    morn: Float
  }

  type Weather {
    id: Int
    main: String
    description: String
    icon: String
  }

  type Daily {
    dt: Int
    sunrise: Int
    sunset: Int
    temp: Temp
    feels_like: Temp
    pressure: Float
    humidity: Float
    dew_point: Float
    wind_speed: Float
    wind_deg: Float
    weather: [Weather]
    clouds: Int
    pop: Int
    uvi: Float
  }

  type ForecastWeather {
    lat: Float
    lon: Float
    timezone: String
    daily: [Daily]
  }

  type Query {
    currentWeather(long: Float!, lat: Float!): CurrentWeather
    fiveDayForecast(long: Float!, lat: Float!): ForecastWeather
  }
`;

const resolvers = {
  Query: {
    currentWeather: async (parent, args): Promise<Array<CurrentWeather>> => {
      const currentWeatherData = await getCurrentWeather(args);

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

    // fiveDayForecast: async (parent, args): Promise<Array<ForecastWeather>> => {
    fiveDayForecast: async (parent, args) => {
      const weatherForecast = await getFiveDayForecast(args);

      const { lat, lon, timezone, daily } = weatherForecast;

      return {
        lat,
        lon,
        timezone,
        daily,
      };
    },
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
