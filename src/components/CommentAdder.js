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
    const { articleId } = this.props;
    if (comment_body === "") {
      this.setState({ comment_body: "Please add a comment before submitting" });
    } else {
      //TODO: rerender when comment is posted
      api.postCommentToArticle("jessjelly", comment_body, articleId);
    }
  };

  render() {
    const { comment_err } = this.state;
    return (
      //TODO: Get p tag below to render to the screen
      <section>
        <br />
        {this.props.currentUser === "jessjelly" ? (
          <form onSubmit={this.handleSubmit}>
            {comment_err !== "" && <p>{comment_err}</p>}
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
                required
              ></textarea>
            </label>
            <br />
            <input type="submit" value="Submit"></input>
          </form>
        ) : (
          <p>You cannot create a comment</p>
        )}
      </section>
    );
  }
}

export default CommentAdder;
