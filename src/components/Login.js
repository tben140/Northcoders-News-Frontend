import React from 'react';

class Login extends React.Component {
  state = {
    username: [
      'jessjelly',
      'tickle122',
      'grumpy19',
      'happyamy2016',
      'cooljmessy',
      'weegembump',
    ],
    selectedUser: 'jessjelly',
  };

  dropdownChange = (e) => {
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
          className="dropdown"
        >
          {username.map((user) => {
            return user === 'jessjelly' ? (
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
