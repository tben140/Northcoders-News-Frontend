import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header.js";
import ArticlesList from "./components/ArticlesList.js";
import SingleArticle from "./components/SingleArticle.js";
import NoMatch from "./components/NoMatch.js";
import Login from "./components/Login.js";
import FilterBar from "./components/FilterBar.js";

class App extends React.Component {
  state = { currentUser: "jessjelly" };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="top-bar-mobile">
          <Login />
          <FilterBar />
        </section>
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/:slug" />
          <SingleArticle
            path="/articles/:article_id"
            currentUser={this.state.currentUser}
          />
          <NoMatch default />
        </Router>
      </div>
    );
  }
}

export default App;
