import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header.js";
import AllArticles from "./components/AllArticles.js";
import CodingArticles from "./components/CodingArticles.js";
import FootballArticles from "./components/FootballArticles.js";
import CookingArticles from "./components/CookingArticles.js";
import NoMatch from "./components/NoMatch.js";
import Login from "./components/Login.js";
import FilterBar from "./components/FilterBar.js";
import SortBar from "./components/SortBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <FilterBar />
      <SortBar />
      <Router>
        <AllArticles path="/" />
        <CodingArticles path="/coding" />
        <FootballArticles path="/football" />
        <CookingArticles path="/cooking" />
        <NoMatch default />
      </Router>
    </div>
  );
}

export default App;
