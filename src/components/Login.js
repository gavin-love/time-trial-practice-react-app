import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

  }



  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => this.props.history.push('/calendar');


  render() {
    const disabled = !this.state.email && !this.state.password
      || !this.state.email || !this.state.password ? true : false;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          name="email" type="text"
          placeholder="email"
        />
        <input
          onChange={this.handleChange}
          value={this.state.password}
          name="password"
          type="text" placeholder="password"
        />
        <button disabled={disabled}>login</button>
      </form>
    )
  }
};

export default withRouter(Login);