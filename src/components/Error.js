import React from "react";

class Error extends React.Component {
  render() {
    return (
      <section className="error-background">
        <h2 className="error-header">An error occured:</h2>
        <h2 className="error-header">{this.props.errormsg}</h2>
      </section>
    );
  }
}

export default Error;
