import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './OtherDogs.css';

class OtherDogs extends Component {
  state = {
    i: 0,
  };
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_OTHER' });
  }

  chatItUp = (owner_id) => (event) => {
    this.props.dispatch({ type: 'SET_CHAT_WITH', payload: owner_id });
    this.props.history.push('/chat');
  };

  backItUp = (event) => {
    if (this.state.i > 0)
      this.setState({
        ...this.state.i--,
      });
  };

  nextDog = (event) => {
    this.setState({
      ...this.state.i++,
    });
  };

  render() {
    const otherDog = this.props.store.other.map((item, index) => {
      return (
        <div key={index}>
          <h2>{item.name}</h2>
          <Box boxShadow={3} align="center">
            <img src={item.picture} alt="A good dog." />
          </Box>
          <p align="center" className="tinytxt">
            {item.size} • {item.energy_level} • {item.play_style}
          </p>
          <h5 className="aboutheader">About {item.name}:</h5>
          <p className="dogdescription">{item.description}</p>
          <div>
            <Grid container>
              <Grid item xs={4}>
                <button
                  onClick={this.backItUp}
                  className="btn btn_sizeFull btnlft"
                >
                  Back
                </button>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={4}>
                <button
                  onClick={this.nextDog}
                  className="btn btn_sizeFull btnrt"
                >
                  Next
                </button>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container className="btncenter">
              <Grid item xs={6}>
                <button
                  className="btn btn_sizeFull"
                  onClick={this.chatItUp(item.owner_id)}
                >
                  Chat
                </button>
              </Grid>
            </Grid>
          </div>
        </div>
      );
    });

    return (
      <Grid className="gettinggriddy">
        <div>{otherDog[this.state.i]}</div>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(OtherDogs));
