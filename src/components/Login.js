import React from "react";

class Login extends React.Component {
  state = {
    username: [
      "tickle122",
      "grumpy19",
      "happyamy2016",
      "cooljmessy",
      "weegembump",
      "jessjelly"
    ]
  };

  componentDidMount() {}

  render() {
    const { username } = this.state;
    return (
      //TODO: Get the label to move with the dropdown box
      <label className="dropdown-box">
        Users:
        <select name="users">
          {username.map(user => {
            return (
              <option value={user} key={user}>
                {user}
              </option>
            );
          })}
        </select>
        <br />
        <br />
      </label>
    );
  }
}

export default Login;
