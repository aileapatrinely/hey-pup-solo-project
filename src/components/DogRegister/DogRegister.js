import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUploader from '../ImageUploader/ImageUploader';

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
            <select
              name="energy_level"
              onChange={this.handleInputChangeFor('energy_level')}
            >
              <option value={this.state.energy_level}>Low</option>
              <option value={this.state.energy_level}>Medium</option>
              <option value={this.state.energy_level}>High</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="size">
            Size:
            <select
              name="size"
              required
              onChange={this.handleInputChangeFor('size')}
            >
              <option value={this.state.size}>X-Small</option>
              <option value={this.state.size}>Small</option>
              <option value={this.state.size}>Medium</option>
              <option value={this.state.size}>Large</option>
              <option value={this.state.size}>X-Large</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="play_style">
            Play-style:
            <select
              name="play_style"
              value={this.state.play_style}
              required
              onChange={this.handleInputChangeFor('play_style')}
            >
              <option value={this.state.play_style}>Just likes company</option>
              <option value={this.state.play_style}>Loves Tug</option>
              <option value={this.state.play_style}>Plays Chase</option>
              <option value={this.state.play_style}>
                Body slams and Wrestling
              </option>
              <option value={this.state.play_style}>Other</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChangeFor('description')}
            />
          </label>
        </div>
        <div>
          <ImageUploader />
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

export default connect(mapStoreToProps)(DogRegister);
