import React from "react";
import Votebar from "./Votebar.js";
import * as api from "../api.js";

class CommentCard extends React.Component {
  state = {};

  handleDelete = comment_id => {
    //TODO: notify user of comment deletion
    this.props.deleteComment(comment_id);
    api.deleteComment(comment_id);
  };

  render() {
    const { comment, currentUser, articleId, newComment } = this.props;

    //TODO: Add avatar component to each comment

    return (
      <section className="comment-container" key={comment.comment_id}>
        <Votebar
          articleId={articleId}
          votes={comment.votes}
          commentId={comment.comment_id}
        />
        <p>Author: {comment.author}</p>
        <p>Created At: {new Date(comment.created_at).toString()}</p>
        <p className="comment-card-body">{comment.body}</p>
        {currentUser === comment.author ? (
          <button onClick={() => this.handleDelete(comment.comment_id)}>
            Delete Comment
          </button>
        ) : (
          <></>
        )}
      </section>
    );
  }
}

export default CommentCard;
