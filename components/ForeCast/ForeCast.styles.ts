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

export const Title = styled.h1``;
