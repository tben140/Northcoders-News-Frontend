import React from "react";

class SortBar extends React.Component {
  state = { selectedSort: "created_at", selectedOrder: "asc" };

  handleSortChange = value => {
    this.setState({ selectedSort: value }, () => {
      this.setSortandOrder();
    });
  };

  handleOrderChange = value => {
    this.setState({ selectedOrder: value }, () => {
      this.setSortandOrder();
    });
  };

  setSortandOrder = () => {
    this.props.handleSortAndOrder(
      this.state.selectedSort,
      this.state.selectedOrder
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.setState({ selectedSort: "created_at", selectedOrder: "asc" });
    }
  }

  render() {
    return (
      <section className="sort-dropdown-container">
        <label className="sort-articles-by">
          Sort By:{" "}
          <select
            onChange={e => this.handleSortChange(e.target.value)}
            value={this.state.selectedSort}
          >
            <option value="created_at">Date Created</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comment Count</option>
          </select>
        </label>{" "}
        <label className="sort-articles-by order-articles-by">
          Order:{" "}
          <select
            onChange={e => this.handleOrderChange(e.target.value)}
            value={this.state.selectedOrder}
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
