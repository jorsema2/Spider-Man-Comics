import React, { useContext } from "react";
import { AppContext } from "./../../App";
import { GridLayout, ExternalLink, ComicTitle } from "./style";

const Home = () => {
  const { comics } = useContext(AppContext);

  return (
    <GridLayout>
      {comics.map((comic, index) => (
        <div key={comic.id}>
          <ExternalLink to={`comic/${index}`}>
            <img
              src={comic.thumbnail.path + "/portrait_incredible.jpg"}
              alt={comic.title}
            />
            <ComicTitle>{comic.title}</ComicTitle>
          </ExternalLink>
        </div>
      ))}
    </GridLayout>
  );
};

export default Home;
