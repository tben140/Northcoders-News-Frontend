import React from 'react';
import * as api from '../api.js';

class CommentAdder extends React.Component {
  state = { comment_body: '', comment_err: '', err: null };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ comment_body: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { comment_body } = this.state;
    const { articleId, currentUser } = this.props;
    if (comment_body === '') {
      this.setState({ comment_err: 'Please add a comment before submitting' });
    } else {
      api
        .postCommentToArticle(currentUser, comment_body, articleId)
        .then(({ data }) => {
          this.props.newCommentCallback(data.comment);
        })
        .catch((err) => {
          this.setState({ err: err });
        });
    }
  };

  render() {
    const { comment_err } = this.state;
    return (
      <section>
        {/* <br /> */}
        <form onSubmit={this.handleSubmit}>
          {comment_err !== '' ? (
            <p className="add-comment-err">{comment_err}</p>
          ) : (
            <p></p>
          )}
          <label className="add-comment-label">
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
          <input className="btn" type="submit" value="Submit"></input>
        </form>
      </section>
    );
  }
}

export default CommentAdder;
