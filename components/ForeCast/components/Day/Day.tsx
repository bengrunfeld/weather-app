import { Title } from "./Day.styles";

const Day = ({ dt }) => {
  const getDate = dt => {
    const d = new Date(dt * 1000);
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const day = days[d.getDay()];
    const date = `${d.getDate()}/${d.getMonth()}`;

    return { day, date };
  };

  const { day, date } = getDate(dt);

  return (
    <Title>
      {day} {date}
    </Title>
  );
};

export default Day;
