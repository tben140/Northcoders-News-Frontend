import React from "react";

class ArticleHeader extends React.Component {
  state = {
    avatar_url: "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4",
    username: "icellusedkars",
    topic: "coding",
    title: "Living in the shadow of a great man",
    created_at: "2018-11-15 12:21:54.171+00",
    votes: 10
  };

  render() {
    const { data } = this.props;
    const date = new Date(data.created_at);
    const dateStr = date.toString();
    return (
      <section className="article-card-header">
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
          <p className="date-title-title">{data.title}</p>
          <p className="date-title-date">{dateStr}</p>
        </section>
      </section>
    );
  }
}

export default ArticleHeader;
