import React from 'react';

import ArticleHeader from './ArticleHeader.js';
import CommentAdder from './CommentAdder.js';
import CommentCard from './CommentCard.js';
import Error from './Error.js';
import FilterBar from './FilterBar.js';
import Login from './Login.js';
import Votebar from './Votebar.js';

import * as api from '../api.js';

class SingleArticle extends React.Component {
  state = {
    article: {},
    comments: [],
    newComment: undefined,
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const fetchArticleDetails = api
      .getArticleDetails(this.props.article_id)
      .then(({ data: { article } }) => this.setState({ article, err: null }))
      .catch((err) => {
        this.setState({ err: err, isLoading: false });
      });

    const fetchCommentsByArticleId = api
      .getCommentsByArticleId(this.props.article_id)
      .then(({ data: { comments } }) => this.setState({ comments, err: null }))
      .catch((err) => {
        this.setState({ err: err, isLoading: false });
      });

    Promise.all([fetchArticleDetails, fetchCommentsByArticleId]).then(() => {
      this.setState({ isLoading: false });
    });
  }

  newCommentAdd = (comment) => {
    this.setState({ newComment: comment });
  };

  removeCommentFromState = (comment_id) => {
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter(
          (comment) => comment.comment_id !== comment_id
        ),
      };
    });
  };

  render() {
    const { article, err, isLoading } = this.state;
    if (err) return <Error errormsg="Invalid article ID" />;
    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <section className="single-article-topbar">
          <Login />
          <FilterBar />
        </section>
        <section className="single-article-css-grid">
          <section className="single-article-flexbox-container">
            <section className="article-card">
              <Votebar votes={article.votes} articleId={article.article_id} />
              <section className="article-header-and-body">
                <ArticleHeader data={article} />
                <p className="single-article-body">{article.body}</p>
              </section>
            </section>
            <section className="comments-container">
              <CommentAdder
                articleId={article.article_id}
                currentUser={this.props.currentUser}
                newCommentCallback={this.newCommentAdd}
              />
              <h3 className="comment-count">
                {article.comment_count} comments:
              </h3>

              {this.state.newComment !== undefined && (
                <CommentCard
                  comment={this.state.newComment}
                  deleteComment={this.removeCommentFromState}
                />
              )}

              {this.state.comments.map((comment) => {
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
        </section>
      </>
    );
  }
}

export default SingleArticle;
