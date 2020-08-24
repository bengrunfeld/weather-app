import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :first-child {
    margin-right: 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h3`
  font-size: 2.2rem;
  font-family: "Roboto", sans-serif;
  text-align: right;
  padding-right: 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    text-align: left;
  }
`;

export const Temp = styled.p`
  font-size: 3.5rem;
  font-family: "Roboto", sans-serif;
`;

interface IconProps {
  type: string;
}

export const Icon = styled.div<IconProps>`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;

  border-bottom: ${({ type }) => (type === "max" ? "58px solid darkred" : "")};

  border-top: ${({ type }) => (type === "min" ? "58px solid darkblue" : "")};
`;

export const TempInfo = styled.div``;
