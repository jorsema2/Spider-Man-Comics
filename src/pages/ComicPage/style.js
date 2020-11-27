import styled from "styled-components";

export const StyledLayout = styled.div`
  min-height: 90%;
  display: flex;
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
`;

export const ComicImage = styled.img`
  width: 80%;
  margin-left: 0;
  @media (orientation: portrait) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  @media (orientation: portrait) {
    width: 100%;
  }
`;
