import styled from "styled-components";

export const Container = styled.div``;

interface UnitType {
  nonActive: boolean;
}

export const Unit = styled.a<UnitType>`
  font-size: 4rem;
  padding: 0.5rem;
  user-select: none;

  cursor: ${({ nonActive }) => (nonActive ? "not-allowed" : "pointer")};

  color: ${({ nonActive, theme }) =>
    nonActive ? theme.colors.black : theme.colors.blue};

  font-weight: ${({ nonActive }) => (nonActive ? "normal" : "bold")};

  &:hover {
    color: ${({ nonActive, theme }) =>
      nonActive ? theme.colors.black : theme.colors.cobaltBlue};
  }
`;

export const Divider = styled.span`
  font-size: 4rem;
`;
