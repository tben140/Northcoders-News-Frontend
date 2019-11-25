import React from "react";

const Error = props => {
  return (
    <section className="error-background">
      <h2 className="error-header">An error occured:</h2>
      <h2 className="error-header">{props.errormsg}</h2>
    </section>
  );
};

export default Error;
