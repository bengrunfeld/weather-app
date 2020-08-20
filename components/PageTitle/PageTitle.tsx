import { TitleContainer, SubTitle, Title } from "./PageTitle.styles";

const PageTitle = ({ city, children }) => (
  <TitleContainer>
    <Title>{children}</Title>
    <SubTitle>For: {city}</SubTitle>
  </TitleContainer>
);

export default PageTitle;
