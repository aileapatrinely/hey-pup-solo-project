import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MyDog extends Component {
  render() {
    return <div>This will be some stuff</div>;
  }
}

export default connect(mapStoreToProps)(MyDog);
