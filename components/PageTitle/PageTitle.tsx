import { UnitPicker } from "../";

import { LeftSide, SubTitle, Title, Container } from "./PageTitle.styles";

const PageTitle = ({ city, children }) => (
  <Container>
    <LeftSide>
      <Title>{children}</Title>
      <SubTitle>For: {city}</SubTitle>
    </LeftSide>
    <UnitPicker />
  </Container>
);

export default PageTitle;
