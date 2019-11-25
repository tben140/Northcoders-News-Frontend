import React from "react";

const ArticleFooter = props => {
  return (
    <section className="article-footer">
      <p className="article-footer-comments">Comments: {props.commentCount}</p>
    </section>
  );
};

export default ArticleFooter;
