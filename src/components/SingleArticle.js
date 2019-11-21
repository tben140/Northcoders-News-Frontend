import React from "react";
import * as api from "../api.js";
import Votebar from "./Votebar.js";
import ArticleHeader from "./ArticleHeader.js";
import CommentAdder from "./CommentAdder.js";
import CommentCard from "./CommentCard.js";
import Error from "./Error.js";

class SingleArticle extends React.Component {
  state = { isLoading: true, err: null };

  componentDidMount() {
    const fetchArticleDetails = api
      .getArticleDetails(this.props.article_id)
      .then(({ data: { article } }) => this.setState({ article }));

    const fetchCommentsByArticleId = api
      .getCommentsByArticleId(this.props.article_id)
      .then(({ data: { comments } }) => this.setState({ comments }))
      .catch(err => {
        console.log("Error", err);
        this.setState({ err: err, isLoading: false });
      });

    Promise.all([fetchArticleDetails, fetchCommentsByArticleId]).then(() => {
      this.setState({ isLoading: false });
    });
  }
  render() {
    const { article, err } = this.state;
    if (err) return <Error errormsg="Invalid article ID" />;
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
          <CommentAdder
            articleId={article.article_id}
            currentUser={this.props.currentUser}
          />
          <h3>{article.comment_count} comments:</h3>
          {this.state.comments.map(comment => {
            return (
              <CommentCard
                comment={comment}
                key={comment.comment_id}
                currentUser={this.props.currentUser}
              />
            );
          })}
        </section>
      </>
    );
  }
}

export default SingleArticle;
