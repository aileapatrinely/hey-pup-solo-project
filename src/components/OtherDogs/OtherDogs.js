import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Grid } from '@material-ui/core';

class OtherDogs extends Component {
  componentDidMount() {
    componentDidMount() {
      this.props.dispatch({ type: 'FETCH_OTHER' });
    }
  }

backItUp =(event)=>{
//some for loop, i--
}

nextDog =(event)=>{
//some for loop, i++
}

  render() {
    const otherDog = this.props.store.dog.map((item, index) => {
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
      <div>{otherDog}</div>
      <div>
        <Button onClick={this.backItUp} className="btnlft" variant="contained" color="primary">
          Back
        </Button>
        <Button onClick={this.nextDog} className="btnrt" variant="contained" color="primary">
          Next
        </Button>
      </div>
    </Grid>
    )
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MyDog);
