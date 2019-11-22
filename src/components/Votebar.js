import React from "react";
import * as api from "../api.js";

class Votebar extends React.Component {
  state = { votes: 0 };

  handleIncrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      api.patchArticleVote(articleId, 1);
      this.setState(prevState => {
        return { votes: prevState.votes + 1 };
      });
    } else if (commentId) {
      api.patchCommentVote(commentId, 1);
      this.setState(prevState => {
        return { votes: prevState.votes + 1 };
      });
    }
  };

  handleDecrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      api.patchArticleVote(articleId, -1);
      this.setState(prevState => {
        return { votes: prevState.votes - 1 };
      });
    } else if (commentId) {
      api.patchCommentVote(commentId, -1);
      this.setState(prevState => {
        return { votes: prevState.votes - 1 };
      });
    }
  };

  componentDidMount() {
    const { articleId, commentId, votes } = this.props;
    this.setState({ votes, commentId });

    if (articleId && commentId === undefined) {
      api.getArticleDetails(articleId).then(
        ({
          data: {
            article: { votes }
          }
        }) => {
          this.setState({ votes, articleId });
        }
      );
    }
  }

  render() {
    //TODO: Add conditional CSS to change color if votecount is negative
    return (
      <section className="votebar">
        <button
          type="button"
          className="votebutton"
          onClick={() => this.handleIncrementVote()}
        >
          Up
        </button>
        <p className="votenumber">{this.state.votes}</p>
        <button
          type="button"
          className="votebutton"
          onClick={() => this.handleDecrementVote()}
        >
          Down
        </button>
      </section>
    );
  }
}
export default Votebar;
