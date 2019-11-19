import React from "react";
import ArticleCard from "./ArticleCard.js";
import * as api from "../api.js";

class AllArticles extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    api
      .getAllArticles()
      .then(({ data: { articles } }) =>
        this.setState({ articles, isLoading: false })
      );
  }

  render() {
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h2 className="topic-title">All Articles</h2>
        {this.state.articles.map(article => {
          return <ArticleCard data={article} key={article.article_id} />;
        })}
      </div>
    );
  }
}

export default AllArticles;
