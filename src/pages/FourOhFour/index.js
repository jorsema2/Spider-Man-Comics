import React from "react";
import {
  StyledLayout,
  ErrorContainer,
  NotFoundMessage,
  InfoContainer,
  ImageLink,
  NotFoundImage,
} from "./style";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spidey404 from "../../assets/images/spidey404.jpg";

const FourOhFour = () => {
  return (
    <StyledLayout>
      <ErrorContainer>
        <NotFoundMessage>NOT FOUND</NotFoundMessage>
      </ErrorContainer>
      <InfoContainer>
        <div>
          <p>
            The page that you want to see does not exist. This may be because an
            invalid URL was introduced.
          </p>
          <p>Please, click in the desperate Spidey to go back to home.</p>
        </div>
        <ImageLink to="/">
          <NotFoundImage
            src={Spidey404}
            alt="Spider-man 404 meme"
            effect="blur"
          />
        </ImageLink>
      </InfoContainer>
    </StyledLayout>
  );
};

export default FourOhFour;
