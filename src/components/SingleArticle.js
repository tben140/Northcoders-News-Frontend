import React from "react";
import * as api from "../api.js";
import Votebar from "./Votebar.js";
import ArticleHeader from "./ArticleHeader.js";
import CommentAdder from "./CommentAdder.js";
import CommentCard from "./CommentCard.js";
import TopicAndDescription from "./TopicAndDescription.js";
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
        this.setState({ err: err, isLoading: true });
      });

    Promise.all([fetchArticleDetails, fetchCommentsByArticleId]).then(() => {
      this.setState({ isLoading: false });
    });
  }

  newCommentAdd = comment => {
    this.setState({ newComment: comment });
  };

  removeCommentFromState = comment_id => {
    this.setState({
      comments: this.state.comments.filter(
        comment => comment.comment_id !== comment_id
      )
    });
  };

  render() {
    const { article, err } = this.state;
    if (err) return <Error errormsg="Invalid article ID" />;
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <section className="single-article-container">
          <section className="article-card">
            <Votebar votes={article.votes} articleId={article.article_id} />
            <ArticleHeader data={article} />
            <p className="single-article-body">{article.body}</p>
          </section>
          <section className="comments-container">
            <CommentAdder
              articleId={article.article_id}
              currentUser={this.props.currentUser}
              newCommentCallback={this.newCommentAdd}
            />
            <h3>{article.comment_count} comments:</h3>

            {this.state.newComment !== undefined && (
              <CommentCard
                comment={this.state.newComment}
                deleteComment={this.removeCommentFromState}
              />
            )}

            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  articleId={article.article_id}
                  commentId={comment.comment_id}
                  comment={comment}
                  key={comment.comment_id}
                  currentUser={this.props.currentUser}
                  newComment={this.state.newComment}
                  deleteComment={this.removeCommentFromState}
                />
              );
            })}
          </section>
        </section>
        {/* <aside>
          <TopicAndDescription className="filterbar-desktop" />
        </aside> */}
      </>
    );
  }
}

export default SingleArticle;
