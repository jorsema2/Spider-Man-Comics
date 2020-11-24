import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import md5 from "md5";
import Home from "./pages/Home";
import ComicPage from "./pages/ComicPage";
import fetchData from "./utils/fetchData";

const baseURL =
  "https://gateway.marvel.com/v1/public/characters/1009610/comics?";

const publicKey = "37a930e399da50a992084e08c9ff9554";

const privateKey = "6ab7bfd1fe702b3978ab975a02aed5f10c734a67";

const hash = md5("1" + privateKey + publicKey);

const completeKey = `ts=1&apikey=${publicKey}&hash=${hash}`;

export const AppContext = React.createContext();

const App = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function getComics() {
      const data = await fetchData(baseURL + completeKey);
      setComics(data.data.results);
    }
    getComics();
  }, []);

  return (
    <Router>
      <AppContext.Provider value={{ comics }}>
        {/* <Navigation /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comic/:comicIndex" component={ComicPage} />
          {/* <Route path="*" component={FourOhFour} /> */}
        </Switch>
        {/* <Footer /> */}
      </AppContext.Provider>
    </Router>
  );
};

export default App;
