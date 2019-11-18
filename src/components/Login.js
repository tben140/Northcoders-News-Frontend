import React from "react";

class Login extends React.Component {
  render() {
    return (
      <label>
        Users:
        <select name="users">
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
          <option value="user4">User 4</option>
        </select>
        <br />
        <br />
      </label>
    );
  }
}

export default Login;
