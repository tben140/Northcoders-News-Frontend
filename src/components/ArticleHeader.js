import React from 'react';
import * as api from '../api.js';
import Error from './Error.js';
import { Link } from '@reach/router';

class ArticleHeader extends React.Component {
  state = { err: null, isLoading: false };

  fetchUserData = (props) => {
    const { data } = props;
    api
      .getUserData(data.author)
      .then(
        ({
          data: {
            user: { avatar_url },
          },
        }) => {
          this.setState({ avatar_url: avatar_url, isLoading: false });
        }
      )
      .catch((err) => {
        this.setState({ err: err, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchUserData(this.props);
  }

  render() {
    const { err, isLoading } = this.state;
    const { data } = this.props;
    const date = new Date(data.created_at).toDateString();

    if (err) return <Error errormsg="Fetch User Data failed" />;
    return isLoading ? (
      <p>Loading...</p>
    ) : (
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
