import React from 'react';
import ArticleCard from './ArticleCard.js';
import SortBar from './SortBar.js';
import Login from './Login.js';
import FilterBar from './FilterBar.js';
import TopicAndDescription from './TopicAndDescription.js';
import * as api from '../api.js';
import Error from './Error.js';

class ArticlesList extends React.Component {
  state = { isLoading: true, err: null };

  fetchArticles = (props) => {
    api
      .getArticles(props.slug)
      .then(({ data: { articles } }) =>
        this.setState({ articles, isLoading: false, err: null })
      )
      .catch((err) => {
        this.setState({ err: err, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchArticles(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.slug !== this.props.slug) {
      this.fetchArticles(this.props);
    }
    if (prevState.err !== null) {
      this.setState({ err: null });
    }
  }

  handleSortAndOrder = (sortBy, order) => {
    const topic = this.props.slug;
    api
      .getArticles(topic, sortBy, order)
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      })
      .catch((err) => {
        this.setState({ err: err, isLoading: false });
      });
  };

  render() {
    const { err, isLoading } = this.state;
    if (err) return <Error errormsg="Not a topic" />;
    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <section className="all-articles-container">
        <section className="all-articles-sort-filter">
          <Login />
          <FilterBar />
        </section>
        <section className="articles-list-container">
          <section className="articles-list-header">
            <h2 className="topic-title">
              {this.props.slug === undefined ? 'All' : `${this.props.slug}`}{' '}
              Articles
            </h2>
            <SortBar
              handleSortAndOrder={this.handleSortAndOrder}
              topic={this.props.slug}
            />
          </section>
          {this.state.articles.map((article) => {
            return <ArticleCard data={article} key={article.article_id} />;
          })}
        </section>
        <TopicAndDescription className="sidebar-desktop" />
      </section>
    );
  }
}

export default ArticlesList;
