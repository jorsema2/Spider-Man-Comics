import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

export const StyledLayout = styled.div`
  min-height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 16px 0px;

  @media (max-height: 425px) {
    font-size: 1rem;
  }
`;

export const ErrorContainer = styled.div`
  background: #b11313;
  padding: 8px;
  border-radius: 8px;
`;

export const NotFoundMessage = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const InfoContainer = styled.div`
  @media (orientation: landscape) {
    display: flex;
  }
`;

export const ImageLink = styled(Link)`
  display: flex;
  justify-content: center;

  span {
    width: 50%;
  }
`;

export const NotFoundImage = styled(LazyLoadImage)`
  width: 100%;
`;
