import React, { useEffect, useContext } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AppContext } from "./../../App";
import { GridLayout, ExternalLink, ComicTitle } from "./style";

const Home = () => {
  const { comics, setLoadingBarProgress } = useContext(AppContext);

  useEffect(() => {
    setLoadingBarProgress(100);
  }, []);

  return (
    <GridLayout>
      {comics.map((comic, index) => (
        <div key={comic.id}>
          <ExternalLink
            to={`comic/${index}`}
            onClick={() => setLoadingBarProgress(50)}
          >
            <LazyLoadImage
              src={comic.thumbnail.path + "/portrait_uncanny.jpg"}
              alt={comic.title}
              effect="blur"
            />
            <ComicTitle>{comic.title}</ComicTitle>
          </ExternalLink>
        </div>
      ))}
    </GridLayout>
  );
};

export default Home;
