import { Container, Title, Temp } from "./MaxMinTemp.styles";

const MaxMinTemp = ({ temp, children }) => (
  <Container>
    <Title>{children}</Title>
    <Temp>{temp}&#176;</Temp>
  </Container>
);

export default MaxMinTemp;
