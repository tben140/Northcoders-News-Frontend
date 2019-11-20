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
    //TODO: Properly destructure topics from axios response
    const { topics: topics } = this.state;

    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <nav className="filterbar">
        <Link to="/">
          <button>All Articles</button>
        </Link>

        {this.state.topics.topics.map(topic => {
          return (
            <Link to={`/${topic.slug}`}>
              <button>{`${topic.slug} articles`}</button>
            </Link>
          );
        })}

        {/* <Link to="/coding">
          <button>Coding Articles</button>
        </Link>
        <Link to="/football">
          <button>Football Articles</button>
        </Link>
        <Link to="/cooking">
          <button>Cooking Articles</button>
        </Link> */}
      </nav>
    );
  }
}

export default FilterBar;
