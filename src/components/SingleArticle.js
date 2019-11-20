import React from "react";
import * as api from "../api.js";

class SingleArticle extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    const fetchArticleDetails = api
      .getArticleDetails(this.props.article_id)
      .then(({ data: { article } }) => this.setState({ article }));

    const fetchCommentsByArticleId = api
      .getCommentsByArticleId(this.props.article_id)
      .then(({ data: { comments } }) => this.setState({ comments }));

    Promise.all([fetchArticleDetails, fetchCommentsByArticleId]).then(() => {
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { article, comments } = this.state;
    console.log("article", article);
    console.log("Comments ->", comments);
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
          <h3>Comments</h3>
          {this.state.comments.map(comment => {
            return (
              <section className="comment-container" key={comment.comment_id}>
                <p>{comment.author}</p>
                <p>{comment.created_at}</p>
                <p>{comment.votes}</p>
                <p>{comment.body}</p>
              </section>
            );
          })}
        </section>
      </>
    );
  }
}

export default SingleArticle;
