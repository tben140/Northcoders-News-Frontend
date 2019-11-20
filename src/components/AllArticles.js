import React from "react";
import ArticleCard from "./ArticleCard.js";
import SortBar from "./SortBar.js";
import Login from "./Login.js";
import FilterBar from "./FilterBar.js";
import * as api from "../api.js";

//TODO: Get rid of this file once ArticlesList can display all articles

class AllArticles extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    api
      .getArticles()
      .then(({ data: { articles } }) =>
        this.setState({ articles, isLoading: false })
      );
  }

  componentDidUpdate() {}

  render() {
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      //TODO: Handle sort functionality
      <section className="all-articles-container">
        <section>
          <h2 className="topic-title">All Articles</h2>
          <SortBar />
          {this.state.articles.map(article => {
            return <ArticleCard data={article} key={article.article_id} />;
          })}
        </section>
        <aside className="sidebar">
          <Login />
          <FilterBar />
        </aside>
      </section>
    );
  }
}

export default AllArticles;
