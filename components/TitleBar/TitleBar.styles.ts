import styled from "styled-components";

export const BarContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: 1rem 4rem;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Alata", sans-serif;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
`;
