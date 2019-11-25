import React from "react";
import { Link } from "@reach/router";
import * as api from "../api.js";

class FilterBar extends React.Component {
  state = { topics: [], isLoading: true, err: null };

  fetchAllTopics = props => {
    api
      .getAllTopics()
      .then(({ data: topics }) => this.setState({ topics, isLoading: false }))
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchAllTopics();
  }

  render() {
    const { topics, isLoading } = this.state;

    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <nav className="filterbar">
          <Link to="/">
            <button className="btn">All Articles</button>
          </Link>

          {topics.topics.map(topic => {
            return (
              <Link to={`/${topic.slug}`} key={topic.slug}>
                <button className="btn">{`${topic.slug} articles`}</button>
              </Link>
            );
          })}
        </nav>
        <br />
      </>
    );
  }
}

export default FilterBar;
