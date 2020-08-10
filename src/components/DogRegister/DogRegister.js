import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class DogRegister extends Component {
  state = {
    name: '',
    energy_level: '',
    size: '',
    play_style: '',
    description: '',
  };

  registerDog = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER_DOG',
      payload: {
        name: this.state.name,
        energy_level: this.state.energy_level,
        size: this.state.size,
        play_style: this.state.play_style,
        description: this.state.description,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerDog}>
        <h2>Register Dog</h2>
        {this.props.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              required
              onChange={this.handleInputChangeFor('name')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="energy_level">
            Energy Level:
            <input
              type=""
              name="energy_level"
              value={this.state.energy_level}
              required
              onChange={this.handleInputChangeFor('energy_level')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="size">
            Size:
            <input
              type=""
              name="size"
              value={this.state.size}
              required
              onChange={this.handleInputChangeFor('size')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="play_style">
            Play-style:
            <input
              type=""
              name="play_style"
              value={this.state.play_style}
              required
              onChange={this.handleInputChangeFor('play_style')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <input
              type=""
              name="description"
              value={this.state.description}
              onChange={this.handleInputChangeFor('description')}
            />
          </label>
        </div>
        <div>
          <input
            className="register"
            type="submit"
            name="submit"
            value="Register"
          />
        </div>
      </form>
    );
  }
}
