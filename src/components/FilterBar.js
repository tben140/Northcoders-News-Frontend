import React from "react";
import { Link } from "@reach/router";
import * as api from "../api.js";

class FilterBar extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    api
      .getAllTopics()
      .then(({ data: topics }) => this.setState({ topics, isLoading: false }));
  }

  render() {
    const { topics } = this.state;

    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <nav className="filterbar">
          <Link to="/">
            <button>All Articles</button>
          </Link>

          {topics.topics.map(topic => {
            return (
              <Link to={`/${topic.slug}`} key={topic.slug}>
                <button>{`${topic.slug} articles`}</button>
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
