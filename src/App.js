import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header.js";
import AllArticles from "./components/AllArticles.js";
import ArticlesList from "./components/ArticlesList.js";
import SingleArticle from "./components/SingleArticle.js";
import NoMatch from "./components/NoMatch.js";
import Login from "./components/Login.js";
import FilterBar from "./components/FilterBar.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <FilterBar />
      <Router>
        <AllArticles path="/" />
        <ArticlesList path="/:slug" />
        <SingleArticle path="/articles/:article_id" />
        <NoMatch default />
      </Router>
    </div>
  );
}

export default App;
