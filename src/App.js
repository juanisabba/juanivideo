import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import Trending from "./pages/Popular";
import Search from "./pages/Search";
import Footer from './components/Footer/Footer'
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Switch>
          <Route exact path="/juanivideo" component={HomePage} />
          <Route exact path="/juanivideo/tv-shows" component={TvShows} />
          <Route exact path="/juanivideo/movies" component={Movies} />
          <Route exact path="/juanivideo/trending" component={Trending} />
          <Route exact path="/juanivideo/search" component={Search} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
