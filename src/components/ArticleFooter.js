import React from "react";

class ArticleFooter extends React.Component {
  state = {
    comment_count: 10
  };

  render() {
    const { commentCount } = this.props;
    return (
      <section className="article-footer">
        <p className="article-footer-comments">Comments: {commentCount}</p>
      </section>
    );
  }
}

export default ArticleFooter;
