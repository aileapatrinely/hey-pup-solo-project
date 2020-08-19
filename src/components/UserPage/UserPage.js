import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MyDog from '../MyDog/MyDog';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  onClickDelete = (event) => {
    const deleteData = this.props.store.user.id;
    this.props.dispatch({
      type: 'DELETE_USER',
      payload: deleteData,
    });
    this.props.history.push('/registration');
  };

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <MyDog />
        <div>
          <p>Your ID is: {this.props.store.user.id}</p>
          <Button onClick={this.onClickDelete}>weetalert Account</Button>
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
