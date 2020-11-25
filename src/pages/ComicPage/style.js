import styled from "styled-components";

export const StyledLayout = styled.div`
  min-height: calc(100vh - 112px - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: 112px;
`;

export const ComicContainer = styled.div`
  max-width: 50%;
`;

export const ComicInformation = styled.div`
  display: flex;
`;

export const TextContainer = styled.div`
  max-width: 66.66%;
`;
