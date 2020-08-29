import { useEffect, useContext } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

import { UnitContext } from "../../pages/_app";
import { Well, PageTitle, NavLink } from "../";
import { ForeCastList } from "./components";

import toCelsius from "../../utils/toCelsius";
import { FAHRENHEIT } from "../../utils/constants";

import { Container, Title } from "./ForeCast.styles";

interface Coords {
  lon: number;
  lat: number;
}

interface WeatherForecast {
  city: string;
  coords: Coords;
  description: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  temp: number;
}

const GET_FIVE_DAY_FORECAST = gql`
  query FiveDayForecast($long: Float!, $lat: Float!) {
    fiveDayForecast(long: $long, lat: $lat) {
      lat
      lon
      timezone
      daily {
        dt
        temp {
          day
          min
          max
        }
        weather {
          icon
          description
        }
      }
    }
  }
`;

const convertToCelsius = data => {
  const {
    fiveDayForecast: { daily: dailyArr, lat, lon, timezone },
  } = data;

  const dailyCelsius = dailyArr.map(item => {
    const { dt, temp: tempF, weather } = item;

    const temp = {
      day: toCelsius(tempF.day),
      max: toCelsius(tempF.max),
      min: toCelsius(tempF.min),
    };

    return {
      dt,
      temp,
      weather,
    };
  });

  return {
    fiveDayForecast: {
      daily: dailyCelsius,
      lat,
      lon,
      timezone,
    },
  };
};

const ForeCast = ({ location }) => {
  const { long, lat } = location;

  const [
    getFiveDayForecast,
    { called, loading, error, data },
  ] = useLazyQuery(GET_FIVE_DAY_FORECAST, { variables: { long, lat } });

  const { unit } = useContext(UnitContext);

  useEffect(() => {
    getFiveDayForecast();
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
      <NavLink href="/">Current Weather</NavLink>
      <PageTitle city={dataObj.fiveDayForecast.timezone}>
        Five Day Forecast
      </PageTitle>
      <ForeCastList dailyData={dataObj.fiveDayForecast.daily} />
    </Container>
  );
};

export default ForeCast;
