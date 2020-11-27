import React, { useState, useEffect, useContext } from "react";
import FourOhFour from "../FourOhFour";
import { AppContext } from "./../../App";
import {
  StyledLayout,
  ComicContainer,
  TitleLink,
  ComicInformation,
  ImageLink,
  ComicImage,
  TextContainer,
} from "./style";

const ComicPage = (props) => {
  const { comics } = useContext(AppContext);
  const [isURLValid, setIsURLValid] = useState();
  const [comicInfo, setComicInfo] = useState({});

  const comicIndex = props.match.params.comicIndex;

  useEffect(() => {
    comicIndex >= 0 && comicIndex < 20
      ? setIsURLValid(true)
      : setIsURLValid(false);
  }, [comicInfo]);

  useEffect(() => {
    if (!comics.length > 0) return;
    composeComicInfo();
  }, [comics]);

  function composeComicInfo() {
    const title = comics[comicIndex].title;
    const description = getDescription();
    const characters = getCharacters();
    const shopLink = getShopLink();
    const image = getImage();

    const allInfo = {
      title: title,
      description: description,
      characters: characters,
      shopLink: shopLink,
      image: image,
    };

    setComicInfo(allInfo);
  }

  function getDescription() {
    const data = comics[comicIndex].description
      ? comics[comicIndex].description
      : "Unfortunately, this Spider-Man Comic has no description in this API :(";
    return data;
  }

  function getCharacters() {
    const items = comics[comicIndex].characters.items.map((el) => {
      return el.name;
    });
    const str = items.join(", ");
    return str;
  }

  function getShopLink() {
    const link = comics[comicIndex].urls[0].url;
    const newLink = changeProtocol(link);
    return newLink;
  }

  function getImage() {
    if (comics[comicIndex].images.length > 1) {
      const index = Math.floor(
        Math.random() * comics[comicIndex].images.length
      );
      const link =
        comics[comicIndex].images[index].path + "/portrait_uncanny.jpg";
      const newLink = changeProtocol(link);
      return newLink;
    } else {
      const link = comics[comicIndex].thumbnail.path + "/portrait_uncanny.jpg";
      const newLink = changeProtocol(link);
      return newLink;
    }
  }

  function changeProtocol(link) {
    // Platforms to deploy code (heroku, Vercel) only accept "https":
    const array = link.split("");
    const newLink = "https" + array.slice(4, array.length).join("");
    return newLink;
  }

  return (
    <StyledLayout>
      {!isURLValid && <FourOhFour />}
      {isURLValid && (
        <ComicContainer>
          <TitleLink
            href={comicInfo.shopLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{comicInfo.title}</h2>
          </TitleLink>
          <ComicInformation>
            <ImageLink
              href={comicInfo.shopLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ComicImage src={comicInfo.image} alt="Spider-man comic" />
            </ImageLink>
            <TextContainer>
              <p>{comicInfo.description}</p>
              <p>Characters: {comicInfo.characters}</p>
            </TextContainer>
          </ComicInformation>
        </ComicContainer>
      )}
    </StyledLayout>
  );
};

export default ComicPage;
