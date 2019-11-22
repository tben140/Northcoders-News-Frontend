import React from "react";
import ArticleCard from "./ArticleCard.js";
import SortBar from "./SortBar.js";
import Login from "./Login.js";
import FilterBar from "./FilterBar.js";
import * as api from "../api.js";

//TODO: Get rid of this file once certain it is no longer required

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

  handleSortAndOrder = (sortBy, order) => {
    //TODO: Recreate this function as util function with TDD and move to articlesList.js
    const articlesArr = this.state.articles;
    if (sortBy === "comment_count" && order === "asc") {
      articlesArr.sort((a, b) => a.comment_count - b.comment_count);
      this.setState({ articles: articlesArr });
    } else if (sortBy === "comment_count" && order === "desc") {
      articlesArr.sort((a, b) => b.comment_count - a.comment_count);
      this.setState({ articles: articlesArr });
    } else if (sortBy === "created_at" && order === "asc") {
      articlesArr.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      this.setState({ articles: articlesArr });
    } else if (sortBy === "created_at" && order === "desc") {
      articlesArr.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      this.setState({ articles: articlesArr });
    } else if (sortBy === "votes" && order === "asc") {
      articlesArr.sort((a, b) => a.votes - b.votes);
      this.setState({ articles: articlesArr });
    } else if (sortBy === "votes" && order === "desc") {
      articlesArr.sort((a, b) => b.votes - a.votes);
      this.setState({ articles: articlesArr });
    }
  };

  render() {
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <section className="all-articles-container">
        <section>
          <h2 className="topic-title">All Articles</h2>
          <SortBar handleSortAndOrder={this.handleSortAndOrder} />
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
