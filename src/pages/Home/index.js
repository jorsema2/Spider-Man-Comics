import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./../../App";

const Home = () => {
  const { comics } = useContext(AppContext);

  return (
    <div>
      {comics.map((comic, index) => (
        <div key={comic.id}>
          <Link to={`comic/${index}`}>
            <img
              src={comic.thumbnail.path + "/portrait_xlarge.jpg"}
              alt={comic.title}
            />
            <h3>{comic.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
