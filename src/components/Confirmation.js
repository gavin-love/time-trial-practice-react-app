import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Confirmation extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <h1>Thank you! We will be in touch</h1>
    )
  }
};

export default withRouter(Confirmation);