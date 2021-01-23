import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { createGlobalStyle } from "styled-components";
import md5 from "md5";
import Home from "./pages/Home";
import ComicPage from "./pages/ComicPage";
import FourOhFour from "./pages/FourOhFour";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarvelFont from "./assets/typography/Marvel-Regular.ttf";
import fetchData from "./utils/fetchData";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "MarvelFont";
  src: url(${MarvelFont}) format('truetype');
}

body {
  font-family: "Tahoma";
  color: #111;
}
`;


console.log(process.env.REACT_APP_NOT_SECRET_CODE)
const API_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

console.log(API_PUBLIC_KEY)
console.log(API_PRIVATE_KEY)

const baseURL =
  "https://gateway.marvel.com/v1/public/characters/1009610/comics?";

const hash = md5("1" + API_PRIVATE_KEY + API_PUBLIC_KEY);

const completeKey = `ts=1&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

export const AppContext = React.createContext();

const App = () => {
  const [comics, setComics] = useState([]);
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);

  useEffect(() => {
    async function getComics() {
      const data = await fetchData(baseURL + completeKey);
      setComics(data.data.results);
    }
    getComics();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <AppContext.Provider value={{ comics, setLoadingBarProgress }}>
        <Header />
        <LoadingBar
          color="#F48024"
          height="4px"
          progress={loadingBarProgress}
          transitionTime={1000}
          loaderSpeed={1500}
          onLoaderFinished={() => setLoadingBarProgress(0)}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comic/:comicIndex" component={ComicPage} />
          <Route path="*" component={FourOhFour}>
            <Redirect to="/404" />
            <FourOhFour />
          </Route>
        </Switch>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
};

export default App;
