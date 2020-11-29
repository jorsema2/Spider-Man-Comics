import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 112px;
  width: 100vw;
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  background-color: #b11313;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 64px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 64px;
  }
`;

export const ExternalLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
  text-decoration: none;
`;

export const StyledIcon = styled.img`
  @media (max-width: 768px) {
    height: 48px;
  }
`;

export const HomeButton = styled.h1`
  color: white;
  font-size: 3rem;
  font-family: "MarvelFont";
  margin-left: 16px;
  transform: translate(0px, 5px);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
