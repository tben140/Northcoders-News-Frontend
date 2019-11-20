import React from "react";
import * as api from "../api.js";
import Votebar from "./Votebar.js";
import ArticleHeader from "./ArticleHeader.js";

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
          <Votebar votes={article.votes} />
          <ArticleHeader data={article} />
          <p>Votes: {article.votes}</p>
          <p className="single-article-body">{article.body}</p>
        </section>
        <section className="comments-container">
          <h3>{article.comment_count} comments:</h3>
          {this.state.comments.map(comment => {
            return (
              <section className="comment-container" key={comment.comment_id}>
                <p>Author: {comment.author}</p>
                <p>Created At: {comment.created_at}</p>
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
