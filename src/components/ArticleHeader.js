import React from "react";
import * as api from "../api.js";
import { Link } from "@reach/router";

class ArticleHeader extends React.Component {
  state = {};

  fetchUserData = props => {
    const { data } = props;
    api.getUserData(data.author).then(
      ({
        data: {
          user: { avatar_url }
        }
      }) => {
        this.setState({ avatar_url: avatar_url });
      }
    );
  };

  componentDidMount() {
    this.fetchUserData(this.props);
  }

  render() {
    const { data } = this.props;
    const date = new Date(data.created_at).toString();

    return (
      <section>
        <section className="avatar-username-topic">
          <img
            src={this.state.avatar_url}
            alt="Avatar"
            className="avatar-img"
          ></img>
          <p className="article-card-header-username">Author: {data.author}</p>
          <p className="article-card-header-topic">Topic: {data.topic}</p>
        </section>
        <section className="date-title">
          <Link to={`/articles/${data.article_id}`}>{data.title}</Link>
          <p className="date-title-date">{date}</p>
        </section>
      </section>
    );
  }
}

export default ArticleHeader;
