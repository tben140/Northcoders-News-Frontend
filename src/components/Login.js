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
    ],
    selectedUser: "jessjelly"
  };

  dropdownChange = e => {
    const { userCallback } = this.props;
    this.setState({ selectedUser: e.target.value });
    userCallback(e.target.value);
  };

  render() {
    const { username } = this.state;
    return (
      <label className="dropdown-box">
        Users:&nbsp;
        <select
          name="users"
          onChange={this.dropdownChange}
          value={this.state.selectedUser}
        >
          {username.map(user => {
            return user === "jessjelly" ? (
              <option value={user} key={user}>
                {user}
              </option>
            ) : (
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
