import styled from "styled-components";

export const Container = styled.div`
  border-right: 0.2rem solid ${({ theme }) => theme.colors.darkGray};
`;

export const Title = styled.h1``;

export const Icon = styled.img`
  width: 14rem;
  height: 14rem;
  object-fit: cover;
`;

export const IconAndTemp = styled.div`
  display: flex;
  justify-content: space-between;

  > :last-child {
    padding-right: 2rem;
  }
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
  font-size: 2rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
  padding-left: 4rem;
`;
