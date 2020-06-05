import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import ArticlesList from './components/ArticlesList.js';
import Header from './components/Header.js';
import NoMatch from './components/NoMatch.js';
import SingleArticle from './components/SingleArticle.js';

class App extends React.Component {
  state = { currentUser: 'jessjelly' };

  changeUser = (user) => {
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <div className="App">
        <Header />
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
