import styled from "styled-components";

export const TitleContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};

  > * {
    padding: 1rem 0;
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  width: 100%;
`;

export const SubTitle = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
`;
