import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;

  > * {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    padding: 1rem 0rem;

    > * {
      flex-direction: row;
    }
  }
`;

export const IconContainer = styled.div`
  width: 10rem;
  height: 10rem;
`;

export const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

export const Title = styled.h3`
  padding: 0 1rem;
  font-size: 2rem;
`;

export const Temp = styled.h4`
  font-size: 2rem;
  font-weight: normal;
`;

export const HiLo = styled.div``;

export const Description = styled.p`
  font-size: 1.9rem;
`;
