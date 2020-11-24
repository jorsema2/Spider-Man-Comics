import React from "react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <div>
      <h1>404 Error: Not Found</h1>
      <p>
        The page that you want to see does not exist. This may be because an
        invalid URL was introduced.
      </p>
      <p>Please, click in the Spidey icon to go back to home.</p>
      <Link to="/">
        <p>"Here will be a Spidey Icon"</p>
      </Link>
    </div>
  );
};

export default FourOhFour;