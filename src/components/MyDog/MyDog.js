import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyDog extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_DOG' });
  }

  render() {
    console.log('dog', this.props.store.dog);
    const myDog = this.props.store.dog.map((item, index) => {
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
