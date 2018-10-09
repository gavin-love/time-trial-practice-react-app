import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Calendar from 'react-calendar';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

  }


  onChange = date => this.setState({ date });
  onSubmit = () => this.props.history.push('/consultation');

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <button onClick={this.onSubmit}>Schedule Consultation</button>
      </div>
    );
  }
};

export default withRouter(Landing);