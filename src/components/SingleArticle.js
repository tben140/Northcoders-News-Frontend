import React from "react";
import * as api from "../api.js";
import Votebar from "./Votebar.js";
import ArticleHeader from "./ArticleHeader.js";
import CommentAdder from "./CommentAdder.js";
import CommentCard from "./CommentCard.js";

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
          <CommentAdder />
          <h3>{article.comment_count} comments:</h3>
          {this.state.comments.map(comment => {
            return <CommentCard comment={comment} />;
          })}
        </section>
      </>
    );
  }
}

export default SingleArticle;
