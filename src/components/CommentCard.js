import React from 'react';
import Votebar from './Votebar.js';
import * as api from '../api.js';

class CommentCard extends React.Component {
  state = {};

  handleDelete = (comment_id) => {
    this.props.deleteComment(comment_id);
    api.deleteComment(comment_id);
  };

  render() {
    const { comment, currentUser, articleId } = this.props;

    return (
      <section className="comment-container" key={comment.comment_id}>
        <Votebar
          articleId={articleId}
          votes={comment.votes}
          commentId={comment.comment_id}
        />
        <section className="comment-details">
          <p className="comment-author">Author: {comment.author}</p>
          <p className="comment-date">
            Date Created: {new Date(comment.created_at).toDateString()}
          </p>
          <p className="comment-card-body">{comment.body}</p>
          {currentUser === comment.author ? (
            <button
              className="delete-btn"
              onClick={() => this.handleDelete(comment.comment_id)}
            >
              Delete Comment
            </button>
          ) : (
            <></>
          )}
        </section>
      </section>
    );
  }
}

export default CommentCard;
