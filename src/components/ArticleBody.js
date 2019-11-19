import React from "react";

class ArticleBody extends React.Component {
  render() {
    const { body } = this.props;
    return <p className="article-card-body">{body}</p>;
  }
}

export default ArticleBody;
