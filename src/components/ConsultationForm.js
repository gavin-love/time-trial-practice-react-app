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

  onSubmit = () => this.props.history.push('/confirmation');

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Enter your information and we will reach out to schedule a consultation</p>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="phone number" />
        <button>Submit</button>
      </form>
    )
  }
};
export default withRouter(ConsultationForm);