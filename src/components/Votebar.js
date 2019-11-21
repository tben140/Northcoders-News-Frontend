import React from "react";
import * as api from "../api.js";

class Votebar extends React.Component {
  state = { votes: 0 };

  handleIncrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId) {
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
    if (articleId) {
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
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      api.getArticleDetails(articleId).then(
        ({
          data: {
            article: { votes }
          }
        }) => {
          this.setState({ votes });
        }
      );
      // } else if (articleId && commentId) {
      //   api.getArticleDetails(articleId).then(api.get).then(
      //     ({
      //       data: {
      //         article: { votes }
      //       }
      //     }) => {
      //       this.setState({ votes });
      //     }
      //   );
      // }
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
