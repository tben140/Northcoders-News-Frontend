import React from "react";
import * as api from "../api.js";

class CommentAdder extends React.Component {
  state = { comment_body: "", comment_err: "" };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ comment_body: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { comment_body } = this.state;
    const { articleId, currentUser } = this.props;
    console.log("COMMENT BODY ->", comment_body);
    if (comment_body === "") {
      this.setState({ comment_err: "Please add a comment before submitting" });
    } else {
      this.props.newCommentCallback({
        author: currentUser,
        votes: 0,
        created_at: new Date().toString(),
        body: comment_body,
        article_id: articleId
      });
      api.postCommentToArticle(currentUser, comment_body, articleId);
    }
  };

  render() {
    const { comment_err } = this.state;
    console.log(this.state.comment_err);
    return (
      //TODO: Get p tag below to render to the screen
      <section>
        <br />

        <form onSubmit={this.handleSubmit}>
          {comment_err !== "" && (
            <p className="add-comment-err">{comment_err}</p>
          )}
          <label>
            Add a comment:
            <br />
            <textarea
              name="Text1"
              placeholder="Add a comment..."
              className="add-comment-textarea"
              cols="100"
              rows="3"
              onChange={this.handleChange}
              // required
            ></textarea>
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    );
  }
}

export default CommentAdder;
