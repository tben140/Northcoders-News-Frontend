import React from "react";
import * as api from "../api.js";

class SingleArticle extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    api
      .getArticleDetails(this.props.article_id)
      .then(({ data: { article } }) =>
        this.setState({ article, isLoading: false })
      );
  }
  render() {
    const { article } = this.state;
    console.log("article", article);
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <section className="single-article-container">
          <h2>{article.title}</h2>
          <p>{article.created_at}</p>
          <p>Author: {article.author}</p>
          <p>Topic: {article.topic}</p>
          <p>Comment Count: {article.comment_count}</p>
          <p>Votes: {article.votes}</p>
          <p>{article.body}</p>
        </section>
        <section className="comments-container">
          <h2>Comments section</h2>
        </section>
      </>
    );
  }
}

export default SingleArticle;
