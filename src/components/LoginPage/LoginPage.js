import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import { withRouter, Link } from 'react-router-dom';

class LoginPage extends Component {
  gotToRegister = (event) => {
    this.props.history.push('/registration');
  };

  render() {
    return (
      <div>
        <LoginForm />

        <center>
          <Link to="/home">Register</Link>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(LoginPage));
