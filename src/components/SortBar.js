import React from "react";

class SortBar extends React.Component {
  state = { selectedSort: "created_at", selectedOrder: "desc" };

  render() {
    return (
      <>
        <label>
          Sort By:
          <select name="SortArticlesBy">
            <option value="created_at">Date Created</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>
        <br />
        <label>
          Order:
          <select>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </>
    );
  }
}

export default SortBar;
