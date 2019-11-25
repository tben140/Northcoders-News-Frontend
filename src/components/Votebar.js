import React from "react";
import * as api from "../api.js";

class Votebar extends React.Component {
  state = {
    votes: 0,
    commentId: 0,
    upClicked: false,
    downClicked: false,
    err: null,
    isLoading: true
  };

  handleIncrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      if (this.state.downClicked === false && this.state.upClicked === false) {
        api.patchArticleVote(articleId, 1);
        this.setState(currentState => {
          return {
            votes: currentState.votes + 1,
            upClicked: true,
            downClicked: false
          };
        });
      } else if (
        this.state.upClicked === false &&
        this.state.downClicked === true
      ) {
        api.patchArticleVote(articleId, 2);
        this.setState(currentState => {
          return {
            votes: currentState.votes + 2,
            upClicked: true,
            downClicked: false
          };
        });
      }
    } else if (commentId) {
      if (this.state.downClicked === false && this.state.upClicked === false) {
        api.patchCommentVote(commentId, 1);
        this.setState(prevState => {
          return {
            votes: prevState.votes + 1,
            upClicked: true,
            downClicked: false
          };
        });
      } else if (
        this.state.upClicked === false &&
        this.state.downClicked === true
      ) {
        api.patchCommentVote(commentId, 2);
        this.setState(prevState => {
          return {
            votes: prevState.votes + 2,
            upClicked: true,
            downClicked: false
          };
        });
      }
    }
  };

  handleDecrementVote = () => {
    const { articleId, commentId } = this.props;
    if (articleId && commentId === undefined) {
      if (this.state.downClicked === false && this.state.upClicked === false) {
        api.patchArticleVote(articleId, -1);
        this.setState(prevState => {
          return {
            votes: prevState.votes - 1,
            upClicked: false,
            downClicked: true
          };
        });
      } else if (
        this.state.upClicked === true &&
        this.state.downClicked === false
      ) {
        api.patchArticleVote(articleId, -2);
        this.setState(prevState => {
          return {
            votes: prevState.votes - 2,
            upClicked: false,
            downClicked: true
          };
        });
      }
    } else if (commentId) {
      if (this.state.downClicked === false && this.state.upClicked === false) {
        api.patchCommentVote(commentId, -1);
        this.setState(prevState => {
          return {
            votes: prevState.votes - 1,
            upClicked: false,
            downClicked: true
          };
        });
      } else if (
        this.state.upClicked === true &&
        this.state.downClicked === false
      ) {
        api.patchCommentVote(commentId, -2);
        this.setState(prevState => {
          return {
            votes: prevState.votes - 2,
            upClicked: false,
            downClicked: true
          };
        });
      }
    }
  };

  fetchArticleDetails = props => {
    const { articleId } = this.props;

    api
      .getArticleDetails(articleId)
      .then(
        ({
          data: {
            article: { votes }
          }
        }) => {
          this.setState({ votes, articleId });
        }
      )
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
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
