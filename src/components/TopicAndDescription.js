import React from "react";
import { Link } from "@reach/router";
import * as api from "../api.js";

class TopicAndDescription extends React.Component {
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
        <nav>
          <Link to="/">
            <button className="btn">All Articles</button>
          </Link>

          {topics.topics.map(topic => {
            return (
              <>
                <Link to={`/${topic.slug}`} key={topic.slug}>
                  <button className="btn">{`${topic.slug} articles`}</button>
                </Link>
                <p>{topic.description}</p>
              </>
            );
          })}
        </nav>
        <br />
      </>
    );
  }
}

export default TopicAndDescription;
