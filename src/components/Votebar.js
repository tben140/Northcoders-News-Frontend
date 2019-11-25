import React from "react";
import * as api from "../api.js";

class Votebar extends React.Component {
  state = { votes: 0, commentId: 0, upClicked: false, downClicked: false };

  handleIncrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      api.patchArticleVote(articleId, 1);
      this.setState(prevState => {
        return {
          votes: prevState.votes + 1,
          upClicked: true,
          downClicked: false
        };
      });
      console.log(this.state.upClicked, this.state.downClicked);
    } else if (commentId) {
      api.patchCommentVote(commentId, 1);
      this.setState(prevState => {
        return {
          votes: prevState.votes + 1,
          upClicked: true,
          downClicked: false
        };
      });
    }
  };

  handleDecrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      api.patchArticleVote(articleId, -1);
      this.setState(prevState => {
        return {
          votes: prevState.votes - 1,
          upClicked: false,
          downClicked: true
        };
      });
      console.log(this.state.upClicked, this.state.downClicked);
    } else if (commentId) {
      api.patchCommentVote(commentId, -1);
      this.setState(prevState => {
        return {
          votes: prevState.votes - 1,
          upClicked: false,
          downClicked: true
        };
      });
    }
  };

  fetchArticleDetails = props => {
    const { articleId } = this.props;

    api.getArticleDetails(articleId).then(
      ({
        data: {
          article: { votes }
        }
      }) => {
        this.setState({ votes, articleId });
      }
    );
  };

  componentDidMount() {
    const { articleId, commentId, votes } = this.props;
    this.setState({ votes, commentId });

    if (articleId && commentId === undefined) {
      this.fetchArticleDetails();
    }
  }

  render() {
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
