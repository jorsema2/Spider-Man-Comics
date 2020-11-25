import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  top: 112px;
  margin: 32px;
`;

export const ComicTitle = styled.h3`
  color: black;
`;

export const ExternalLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  text-decoration: none;
  margin: 32px;

  img {
    position: relative;
    top: 0;
    transition: top ease 0.25s;
  }
  img:hover {
    top: -10px;
  }

  &:hover ${ComicTitle} {
    color: #B11313;
  }
`;
