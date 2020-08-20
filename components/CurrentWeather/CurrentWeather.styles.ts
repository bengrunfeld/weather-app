import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 2rem;

  > * {
    width: 100%;
    max-width: 80rem;
    margin-bottom: 1.5rem;
    padding: 1rem 2rem;
  }

  > :last-child {
    padding: 0;
  }
`;

export const MinMaxContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TempContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};

  padding: 2rem;
  margin: 0.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    width: 49%;
  }
`;

export const Title = styled.h1``;
