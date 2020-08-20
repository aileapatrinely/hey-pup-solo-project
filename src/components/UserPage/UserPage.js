import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MyDog from '../MyDog/MyDog';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import swal from '@sweetalert/with-react';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  onClickDelete = (event) => {
    swal({
      title: 'Are you sure?',
      text: 'Deleting your account is permanent!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.deleteAccount();
        swal('Poof! account has been deleted!', {
          icon: 'success',
        });
      } else {
        swal('Your account is safe!');
      }
    });
  };

  deleteAccount = () => {
    this.props.dispatch({
      type: 'DELETE_USER',
      payload: {
        id: this.props.store.user.id,
      },
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
          <Button onClick={this.onClickDelete}>Delete Account</Button>
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
