import { Container, Title, Temp, Icon, TempInfo } from "./MaxMinTemp.styles";

const MaxMinTemp = ({ temp, children, type }) => (
  <Container>
    <Icon type={type} />
    <TempInfo>
      <Title>{children}</Title>
      <Temp>{temp}&#176;</Temp>
    </TempInfo>
  </Container>
);

export default MaxMinTemp;
