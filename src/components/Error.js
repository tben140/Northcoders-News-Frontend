import React from "react";

class Error extends React.Component {
  render() {
    return <h2>An error occured {this.props.errormsg}</h2>;
  }
}

export default Error;
