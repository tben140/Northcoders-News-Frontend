import React from "react";

class SortBar extends React.Component {
  state = { selectedSort: "created_at", selectedOrder: "desc" };

  render() {
    return (
      <>
        <label className="sort-articles-by">
          Sort By:
          <select>
            <option value="created_at">Date Created</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>
        <br />
        <label className="sort-articles-by">
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
