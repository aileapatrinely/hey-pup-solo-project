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
    owner_id: '',
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
        owner_id: this.props.user.id,
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
              <option value={this.state.energy_level.low}>Low</option>
              <option value={this.state.energy_level.medium}>Medium</option>
              <option value={this.state.energy_level.high}>High</option>
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
              <option value={this.state.size.xsmall}>X-Small</option>
              <option value={this.state.size.small}>Small</option>
              <option value={this.state.size.medium}>Medium</option>
              <option value={this.state.size.large}>Large</option>
              <option value={this.state.size.xlarge}>X-Large</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="play_style">
            Play-style:
            <select
              name="play_style"
              onChange={this.handleInputChangeFor('play_style')}
            >
              <option value={this.state.play_style.justlikescompany}>
                Just likes company
              </option>
              <option value={this.state.play_style.lovestug}>Loves Tug</option>
              <option value={this.state.play_style.playschase}>
                Plays Chase
              </option>
              <option value={this.state.play_style.bodyslamsandwrestling}>
                Body slams and Wrestling
              </option>
              <option value={this.state.play_style.other}>Other</option>
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
