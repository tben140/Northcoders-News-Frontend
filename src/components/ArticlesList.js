import React from "react";
import ArticleCard from "./ArticleCard.js";
import SortBar from "./SortBar.js";
import * as api from "../api.js";
import Error from "./Error.js";

class ArticlesList extends React.Component {
  state = { isLoading: true, err: null };

  componentDidMount() {
    api
      .getArticles(this.props.slug)
      .then(({ data: { articles } }) =>
        this.setState({ articles, isLoading: false })
      )
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      api
        .getArticles(this.props.slug)
        .then(({ data: { articles } }) =>
          this.setState({ articles, isLoading: false })
        );
    }
  }

  render() {
    const { err } = this.state;
    console.log("this.handleSortAndOrder ->", this.handleSortAndOrder);
    if (err) return <Error errormsg="Not a topic" />;
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h2 className="topic-title">{`${this.props.slug}`} Articles</h2>
        <SortBar />
        {this.state.articles.map(article => {
          return <ArticleCard data={article} key={article.article_id} />;
        })}
      </div>
    );
  }
}

export default ArticlesList;
