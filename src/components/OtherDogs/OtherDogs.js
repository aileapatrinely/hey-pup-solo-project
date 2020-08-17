import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class OtherDogs extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_OTHER' });
  }

  backItUp = (event) => {
    // // for (i = 0; i < arrayLength; i--) {
    //   //gotta figure this out
    // }
  };

  nextDog = (event) => {
    // for (i = 0; i < arrayLength; i++) {
    //   //figure this out
    // }
  };

  render() {
    const otherDog = this.props.store.other.map((item, index) => {
      return (
        <div key={index}>
          <h2>{item.name}</h2>
          <p align="center">
            <img src={item.picture} />
          </p>
          <p align="center" className="tinytxt">
            {item.size} • {item.energy_level} • {item.play_style}
          </p>
          <h5>About {item.name}:</h5>
          <p>{item.description}</p>
          <Button
            onClick={this.props.history.push('/chat')}
            variant="contained"
            color="primary"
          >
            Chat
          </Button>
        </div>
      );
    });
    return (
      <Grid className="gettinggriddy">
        <div>{otherDog}</div>
        <div>
          <Button
            onClick={this.backItUp}
            className="btnlft"
            variant="contained"
            color="primary"
          >
            Back
          </Button>
          <Button
            onClick={this.nextDog}
            className="btnrt"
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(OtherDogs));
