import React from "react";

class FilterAndSortBar extends React.Component {
  render() {
    return (
      <>
        <label>
          Filter Topic:
          <select name="FilterTopic">
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
          </select>
        </label>
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
      </>
    );
  }
}

export default FilterAndSortBar;
