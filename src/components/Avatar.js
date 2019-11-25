import React from "react";

const Avatar = props => {
  return (
    <section className="avatar-username-topic">
      <img
        src={this.state.avatar_url}
        alt="Avatar"
        className="avatar-img"
      ></img>
      <p className="article-card-header-username">Author: {data.author}</p>
      <p className="article-card-header-topic">Topic: {data.topic}</p>
    </section>
  );
};

export default Avatar;
