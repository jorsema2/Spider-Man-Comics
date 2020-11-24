import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./../../App";

const ComicPage = (props) => {
  const { comics } = useContext(AppContext);
  const [comicInfo, setComicInfo] = useState({});

  const comicIndex = props.match.params.comicIndex;

  function composeComicInfo() {
    const title = comics[comicIndex].title;
    const description = getDescription();
    const characters = getCharacters();
    const link = getLink();
    const image = getImage();

    const allInfo = {
      title: title,
      description: description,
      characters: characters,
      link: link,
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
    const str = items.join(", ")
    return str;
  }

  function getLink() {
    //Changes "http" to "https". Platforms to deploy code (heroku, Vercel) only accept "https":
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
        comics[comicIndex].images[index].path + "/portrait_xlarge.jpg";
      const newLink = changeProtocol(link);
      return newLink;
    } else {
      const link = comics[comicIndex].thumbnail.path + "/portrait_xlarge.jpg";
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

  useEffect(() => {
    if (!comics[comicIndex]) return;
    composeComicInfo();
  }, [comics]);

  return (
    <div>
      {comics[comicIndex] && (
        <div>
          <a href={comicInfo.link} target="_blank" rel="noopener noreferrer">
            <h2>{comicInfo.title}</h2>
          </a>
          <div>
            <a href={comicInfo.link} target="_blank" rel="noopener noreferrer">
              <img src={comicInfo.image} alt="Spider-man comic" />
            </a>
            <p>{comicInfo.description}</p>
            <p>Characters: {comicInfo.characters}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComicPage;
