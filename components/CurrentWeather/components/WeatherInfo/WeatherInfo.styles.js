import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightGray};

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    flex-direction: row;
  }
`;
