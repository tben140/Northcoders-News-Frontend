import React from "react";

class SortBar extends React.Component {
  state = { selectedSort: "created_at", selectedOrder: "desc" };

  handleSortChange = event => {
    this.setState({ selectedSort: event });
  };

  handleOrderChange = event => {
    this.setState({ selectedOrder: event });
  };

  render() {
    return (
      <>
        <label className="sort-articles-by">
          Sort By:
          <select onChange={event => this.handleSortChange(event.target.value)}>
            <option value="created_at">Date Created</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>
        <br />
        <label className="sort-articles-by">
          Order:
          <select
            onChange={event => this.handleOrderChange(event.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </>
    );
  }
}

export default SortBar;
