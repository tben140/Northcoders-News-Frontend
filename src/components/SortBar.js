import React from "react";

class SortBar extends React.Component {
  render() {
    return (
      <label>
        Sort By:
        <select name="SortArticlesBy">
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="title">Title</option>
          <option value="article_id">Article ID</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment Count</option>
        </select>
      </label>
    );
  }
}

export default SortBar;
