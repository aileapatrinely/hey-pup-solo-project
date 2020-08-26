import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import './MyDog.css';
import { withRouter } from 'react-router-dom';

class MyDog extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_DOG' });
    this.props.dispatch({ type: 'FETCH_OTHER' });
  }

  fetchDogs = (event) => {
    this.props.history.push(`/fetch`);
  };

  editDog = (event) => {
    this.props.history.push(`/edit`);
  };

  render() {
    // const otherDog = this.props.store.other.map((item) => {
    //   return item.id;
    // });
    console.log('dog', this.props.store.dog);
    const myDog = this.props.store.dog.map((item, index) => {
      return (
        <div key={item.index}>
          <h2>{item.name}</h2>
          <Box boxShadow={3} align="center">
            <img src={item.picture} alt="A good dog." />
          </Box>
          <p align="center" className="tinytxt">
            {item.size} • {item.energy_level} • {item.play_style}
          </p>
          <h5 className="aboutheader">About {item.name}:</h5>
          <p className="dogdescription">{item.description}</p>
        </div>
      );
    });

    return (
      <Grid className="gettinggriddy">
        <div>{myDog}</div>
        <Grid xs={12} className="gridlft">
          <button onClick={this.editDog} className="btn btn_sizeSm btnlft">
            Edit Dog
          </button>
        </Grid>
        <Grid xs={12} className="gridrt">
          <button onClick={this.fetchDogs} className="btn btn_sizeSm btnrt">
            Fetch Dogs!
          </button>
        </Grid>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(MyDog));
