import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Grid, Box } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

class OtherDogs extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_OTHER' });
  }

  chatItUp = (owner_id) => (event) => {
    this.props.dispatch({ type: 'SET_CHAT_WITH', payload: owner_id });
    this.props.history.push('/chat');
  };

  backItUp = (event) => {
    // // for (i = 0; i < arrayLength; i--) {
    //   //gotta figure this out
    // }
  };

  nextDog = (event) => {
    // for (i = 0; i < arrayLength; i++) {
    // }
  };

  render() {
    const otherDog = this.props.store.other.map((item, index) => {
      return (
        <div key={index}>
          <h2>{item.name}</h2>
          <Box boxShadow={3} align="center">
            <img src={item.picture} />
          </Box>
          <p align="center" className="tinytxt">
            {item.size} • {item.energy_level} • {item.play_style}
          </p>
          <h5>About {item.name}:</h5>
          <p>{item.description}</p>
          <Button
            onClick={this.chatItUp(item.owner_id)}
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
