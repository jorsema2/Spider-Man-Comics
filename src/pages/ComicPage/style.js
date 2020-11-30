import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const StyledLayout = styled.div`
  min-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComicContainer = styled.div`
  width: 66.6666%;
  margin: 6rem auto 2rem;
`;

export const TitleLink = styled.a`
  color: black;
  text-decoration: none;
`;

export const ComicInformation = styled.div`
  display: flex;
  align-items: start;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`;

export const ImageLink = styled.a`
  width: 50%;
  @media (orientation: portrait) {
    width: 100%;
  }
  span {
    width: 90%;
  }
`;

export const ComicImage = styled(LazyLoadImage)`
  margin-left: 0;
  width: 100%;
`;

export const TextContainer = styled.div`
  width: 50%;
  font-size: 1.2rem;
  @media (orientation: portrait) {
    width: 100%;
  }
`;

export const CharactersSectionTitle = styled.p`
  font-weight: bold;
`;
