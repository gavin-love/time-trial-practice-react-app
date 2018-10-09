import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class ConsultationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
    }

  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onSubmit = () => this.props.history.push('/confirmation');

  render() {
    const disabled = !this.state.email && !this.state.name
      && !this.state.phoneNumber
      || !this.state.email || !this.state.name
      || !this.state.phoneNumber ? true : false;

    return (
      <form onSubmit={this.onSubmit}>
        <p>Enter your information and we will reach out to schedule a consultation</p>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          name="name" type="text"
          placeholder="name"
        />
        <input
          onChange={this.handleChange}
          value={this.state.email}
          name="email" type="text"
          placeholder="email"
        />
        <input
          onChange={this.handleChange}
          value={this.state.phoneNumber}
          name="phoneNumber" type="text"
          placeholder="phone number"
        />
        <button disabled={disabled}>Submit</button>
      </form>
    )
  }
};
export default withRouter(ConsultationForm);