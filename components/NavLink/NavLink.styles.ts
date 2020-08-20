import styled from "styled-components";

export const Container = styled.div``;

export const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 2rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;
