import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #b11313;
  display: flex;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;

export const AppInfoContainer = styled.div`
  width: 40%;
`;

export const APIInfoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledText = styled.p`
  @media (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const Disclaimer = styled.p`
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
