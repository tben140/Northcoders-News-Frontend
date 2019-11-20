import React from "react";

class CommentAdder extends React.Component {
  state = {};

  render() {
    return (
      <section>
        <p>Add a comment:</p>
        <form>
          <textarea name="Text1" cols="100" rows="3"></textarea>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    );
  }
}

export default CommentAdder;
