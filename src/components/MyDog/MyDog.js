import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Grid, Box } from '@material-ui/core';
import './MyDog.css';
import { withRouter } from 'react-router-dom';
import { shadows } from '@material-ui/system';

class MyDog extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_DOG' });
    this.props.dispatch({ type: 'FETCH_OTHER' });
  }

  fetchDogs = (event) => {
    this.props.history.push(`/fetch`);
  };

  editDog = (event) => {
    this.props.history.push(`/edit/${this.props.store.dog.id}`);
  };

  render() {
    // const otherDog = this.props.store.other.map((item) => {
    //   return item.id;
    // });
    console.log('dog', this.props.store.dog);
    const myDog = this.props.store.dog.map((item, index) => {
      return (
        <div>
          <h2>{item.name}</h2>
          <Box boxShadow={3} align="center">
            <img src={item.picture} />
          </Box>
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
          <Button
            onClick={this.editDog}
            className="btnlft"
            variant="contained"
            color="primary"
          >
            Edit my Dog
          </Button>
          <Button
            onClick={this.fetchDogs}
            className="btnrt"
            variant="contained"
            color="primary"
          >
            Fetch Dogs!
          </Button>
        </div>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(MyDog));
