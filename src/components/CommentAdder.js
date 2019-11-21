import React from "react";
import * as api from "../api.js";

class CommentAdder extends React.Component {
  state = { comment_body: "" };

  handleChange = e => {
    console.log("Textarea state ->>", this.state.comment_body);
    const { value } = e.target;
    this.setState({ comment_body: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { comment_body } = this.state;
    const { articleId } = this.props;
    //TODO: rerender when comment is posted
    api.postCommentToArticle("jessjelly", comment_body, articleId);
  };

  render() {
    return (
      <section>
        <br />
        {this.props.currentUser === "jessjelly" ? (
          <form onSubmit={this.handleSubmit}>
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
