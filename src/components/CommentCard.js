import React from "react";
import Votebar from "./Votebar.js";

class CommentCard extends React.Component {
  state = {};

  render() {
    const { comment } = this.props;
    return (
      <section className="comment-container" key={comment.comment_id}>
        <Votebar votes={comment.votes} />
        <p>Author: {comment.author}</p>
        <p>Created At: {comment.created_at}</p>
        <p>Votes: {comment.votes}</p>
        <p className="comment-card-body">{comment.body}</p>
      </section>
    );
  }
}

export default CommentCard;
