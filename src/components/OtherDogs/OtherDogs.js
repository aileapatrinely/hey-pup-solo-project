import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Grid } from '@material-ui/core';

class OtherDogs extends Component {
  componentDidMount() {}

  render() {
    const otherDog = this.props.store.dog.map((item, index) => {
      return (
        <div>
          <h3>{item.name}</h3>
          <img src={item.picture} />
          <p>{item.size}</p>
          <p>{item.energy_level}</p>
          <p>{item.play_style}</p>
          <p>{item.description}</p>
        </div>
      );
    });
    return <div>{myDog}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MyDog);
