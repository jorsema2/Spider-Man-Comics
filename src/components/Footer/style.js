import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #b11313;
  display: flex;
`;

export const Container = styled.div`
  color: white;
  width: 100%;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const AppInfoContainer = styled.div`
  width: 50%;
`;

export const APIInfoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const AppTitle = styled.p`
  font-family: "MarvelFont";
  font-size: 2.25rem;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const AppDescription = styled.p`
  font-size: 1.2 rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Disclaimer = styled.p`
  font-size: 1.2 rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
