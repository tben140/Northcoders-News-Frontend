import React from "react";

class SortBar extends React.Component {
  state = { selectedSort: "created_at", selectedOrder: "asc" };

  handleSortChange = event => {
    this.setState({ selectedSort: event }, () => {
      this.setSortandOrder();
    });
  };

  handleOrderChange = event => {
    this.setState({ selectedOrder: event }, () => {
      this.setSortandOrder();
    });
  };

  setSortandOrder = () => {
    this.props.handleSortAndOrder(
      this.state.selectedSort,
      this.state.selectedOrder
    );
  };

  render() {
    return (
      <section className="sort-dropdown-container">
        <label className="sort-articles-by">
          Sort By:{" "}
          <select onChange={event => this.handleSortChange(event.target.value)}>
            <option value="created_at">Date Created</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>{" "}
        <label className="sort-articles-by">
          Order:{" "}
          <select
            onChange={event => this.handleOrderChange(event.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </section>
    );
  }
}

export default SortBar;
