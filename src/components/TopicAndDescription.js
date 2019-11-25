import React from "react";
import { Link } from "@reach/router";
import * as api from "../api.js";
import Login from "./Login.js";

class TopicAndDescription extends React.Component {
  state = { topics: [], isLoading: true, err: null };

  fetchAllTopics = props => {
    api
      .getAllTopics()
      .then(({ data: topics }) =>
        this.setState({ topics, isLoading: false, err: null })
      )
      .catch(err => this.setState({ err: err, isLoading: false }));
  };

  componentDidMount() {
    this.fetchAllTopics();
  }

  render() {
    const { topics } = this.state;

    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <>
        <nav className="topic-and-description">
          <Login />
          <h2 className="sidebar-topic-title">Topics:</h2>
          <Link to="/">
            <button className="btn">All Articles</button>
          </Link>
          <br />

          {topics.topics.map(topic => {
            return (
              <>
                <Link to={`/${topic.slug}`} key={topic.slug}>
                  <button className="btn">{`${topic.slug} articles`}</button>
                </Link>
                <p className="topic-description">{topic.description}</p>
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
