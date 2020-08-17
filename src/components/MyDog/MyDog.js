import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Grid } from '@material-ui/core';
import './MyDog.css';

class MyDog extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_DOG' });
  }

  render() {
    console.log('dog', this.props.store.dog);
    const myDog = this.props.store.dog.map((item, index) => {
      return (
        <div>
          <h2>{item.name}</h2>
          <p align="center">
            <img src={item.picture} />
          </p>
          <p align="center" className="tinytxt">
            {item.size} • {item.energy_level} • {item.play_style}
          </p>
          <h5>About {item.name}:</h5>
          <p>{item.description}</p>
        </div>
      );
    });
    return (
      <Grid className="gettinggriddy">
        <div>{myDog}</div>
        <div>
          <Button className="btnlft" variant="contained" color="primary">
            Edit my Dog
          </Button>
          <Button className="btnrt" variant="contained" color="primary">
            Fetch Dogs!
          </Button>
        </div>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MyDog);
