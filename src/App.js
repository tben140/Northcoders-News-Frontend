import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header.js';
import ArticlesList from './components/ArticlesList.js';
// import SingleArticle from "./components/SingleArticle.js";
import SingleArticleWithFlexbox from './components/SingleArticleWithFlexbox.js';
import NoMatch from './components/NoMatch.js';

class App extends React.Component {
  state = { currentUser: 'jessjelly' };

  changeUser = (user) => {
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <section className="top-bar-mobile">
          <Login userCallback={this.changeUser} />
          <FilterBar />
        </section> */}
        <Router>
          <ArticlesList path="/" />
          <ArticlesList path="/:slug" />
          <SingleArticleWithFlexbox
            path="/articles/:article_id"
            currentUser={this.state.currentUser}
          />
          <NoMatch default />
        </Router>
        {/* <section className="sidebar-desktop">
          <TopicAndDescription />
        </section> */}
      </div>
    );
  }
}

export default App;
