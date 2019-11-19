import React from "react";

class Votebar extends React.Component {
  state = { votes: 10 };

  render() {
    const { votes } = this.props;
    //TODO: Set state for votes and reseed production DB with correct votes for articles
    return (
      <section className="votebar">
        <button type="button" className="votebutton">
          Up
        </button>
        <p className="votenumber">{votes}</p>
        <button type="button" className="votebutton">
          Down
        </button>
      </section>
    );
  }
}
export default Votebar;
