import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;

  width: 100%;

  > * {
    padding: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    padding-left: 2rem;
    padding-top: 0;
  }
`;

export const DataItem = styled.p`
  font-size: 1.8rem;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span`
  display: inline-block;

  padding-right: 1rem;
`;

export const Value = styled.span`
  display: inline-block;
`;
