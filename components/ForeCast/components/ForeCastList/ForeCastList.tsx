import { DailyWeather } from "../";
import { Container } from "./ForeCastList.styles";

const ForeCastList = ({ dailyData }) => (
  <Container>
    {dailyData.map((item, i) =>
      i < 5 ? <DailyWeather key={item.dt} weatherData={item} /> : null
    )}
  </Container>
);

export default ForeCastList;
