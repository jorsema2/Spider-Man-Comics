import styled from "styled-components";
import { Link } from "react-router-dom";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 128px 32px 32px 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 64px 0px 0px 0px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ComicTitle = styled.h3`
  color: black;
`;

export const ExternalLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    color: #b11313;
  }
`;
