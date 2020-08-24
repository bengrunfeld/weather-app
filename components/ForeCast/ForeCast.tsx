import { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

import { Well, PageTitle, NavLink } from "../";
import { ForeCastList } from "./components";
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

const ForeCast = ({ location }) => {
  const { long, lat } = location;

  const [
    getFiveDayForecast,
    { called, loading, error, data },
  ] = useLazyQuery(GET_FIVE_DAY_FORECAST, { variables: { long, lat } });

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

  return (
    <Container>
      <NavLink href="/">Current Weather</NavLink>
      <PageTitle city={data.fiveDayForecast.timezone}>
        Five Day Forecast
      </PageTitle>
      <ForeCastList dailyData={data.fiveDayForecast.daily} />
    </Container>
  );
};

export default ForeCast;
