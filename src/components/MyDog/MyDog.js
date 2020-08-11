import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MyDog extends Component {
  render() {
    return (
      <div>
        <h3>{}</h3>
        <p>Gonna have dog picture</p>
        <p>gonna have dog info</p>
        <p>gonna have dog description</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MyDog);
