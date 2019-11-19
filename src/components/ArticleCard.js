import React from "react";
import Votebar from "./Votebar.js";
import ArticleHeader from "./ArticleHeader.js";
import ArticleBody from "./ArticleBody.js";
import ArticleFooter from "./ArticleFooter.js";

class ArticleCard extends React.Component {
  state = {
    articles: []
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <section className="article-card">
          <Votebar votes={data.votes} />
          <ArticleHeader data={data} />
          <ArticleBody body={data.body} />
          <ArticleFooter commentCount={data.comment_count} />
        </section>
      </>
    );
  }

  componentDidMount = () => {};
}

export default ArticleCard;
