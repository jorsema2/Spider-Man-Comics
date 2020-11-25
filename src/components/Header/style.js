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
`;

export const ExternalLink = styled(Link)`
  max-width: 256px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
  text-decoration: none;
`;

export const HomeButton = styled.h1`
  color: white;
  font-size: 3rem;
  margin-left: 16px;
`;
