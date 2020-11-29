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

export const ImageLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const NotFoundImage = styled(LazyLoadImage)`
  width: 70%;
  
  img {
    width: 70%;
  }
`;
