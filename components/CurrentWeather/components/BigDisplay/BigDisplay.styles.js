import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 3rem;

  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.darkGray};

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    border-right: 0.2rem solid ${({ theme }) => theme.colors.darkGray};
    border-bottom: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 55%;
    padding-right: 2rem;
  }
`;

export const Title = styled.h1``;

export const IconContainer = styled.div`
  width: 14rem;
  height: 14rem;
`;

export const Icon = styled.img`
  width: 10rem;
  height: 12rem;
  object-fit: cover;

  @media screen and (min-width: ${({ theme }) => theme.size.desktop}) {
    width: 12rem;
    height: 14rem;
  }
`;

export const IconAndTemp = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TempAndFeel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    padding: 1rem 0;
  }
`;

export const Temp = styled.p`
  font-size: 3.5rem;
`;

export const Feel = styled.p`
  font-size: 1.6rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  padding-left: 1rem;
`;
