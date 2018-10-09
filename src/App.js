import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import ConsultationForm from './components/ConsultationForm.js';
import Login from './components/Login.js';
import Landing from './components/Landing.js';
import Confirmation from './components/Confirmation.js'
import './App.css';

class App extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => this.setState({ date });
  render() {

    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/calendar" component={Landing} />
        <Route exact path="/consultation" component={ConsultationForm} />
        <Route exact path="/confirmation" component={Confirmation} />
      </div>
    );
  }
}

export default withRouter(App);
