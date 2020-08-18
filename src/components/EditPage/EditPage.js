import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUploader from '../ImageUploader/ImageUploader';
import { withRouter } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class EditPage extends Component {
  state = {
    name: '',
    energy_level: '',
    size: '',
    play_style: '',
    description: '',
    owner_id: '',
    picture: '',
    id: '',
  };

  componentDidMount() {
    if (!this.props.store.dog.name) {
      this.props.dispatch({
        type: 'FETCH_DOG',
        payload: this.props.match.params.id,
      });
    }
  }

  onCancelClick = (event) => {
    this.props.history.push(`/admin`);
  };

  onSaveClick = (event) => {
    event.preventDefault();
    const dataForServer = {
      name: this.state.name,
      energy_level: this.state.energy_level,
      size: this.state.size,
      play_style: this.state.play_style,
      description: this.state.description,
      owner_id: this.props.user.id,
      picture: this.props.store.dogImage,
      id: this.props.store.dog.id,
    };
    this.props.dispatch({
      type: 'UPDATE_DOG',
      payload: dataForServer,
    });
    this.props.history.push(`/admin`);
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form className="formPanel" onSubmit={this.onSaveClick}>
          <h1>Editing {this.props.store.dog.name}</h1>
          <div>
            <label htmlFor="name">
              Name:
              <input
                defaultValue={this.props.store.dog.name}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange('name')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="energy_level">
              Energy Level:
              <select
                name="energy_level"
                onChange={this.onInputChange('energy_level')}
                defaultValue={this.props.store.dog.energy_level}
              >
                <option value={'low'}>Low</option>
                <option value={'medium'}>Medium</option>
                <option value={'high'}>High</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="size">
              Size:
              <select
                name="size"
                defaultValue={this.props.store.dog.size}
                onChange={this.onInputChange('size')}
              >
                <option value={'xsmall'}>X-Small</option>
                <option value={'small'}>Small</option>
                <option value={'medium'}>Medium</option>
                <option value={'large'}>Large</option>
                <option value={'xlarge'}>X-Large</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="play_style">
              Play-style:
              <select
                name="play_style"
                defaultValue={this.props.store.dog.play_style}
                onChange={this.onInputChange('play_style')}
              >
                <option value={'justlikescompany'}>Just likes company</option>
                <option value={'lovestug'}>Loves Tug</option>
                <option value={'playschase'}>Plays Chase</option>
                <option value={'bodyslamsandwrestling'}>
                  Body slams and Wrestling
                </option>
                <option value={'other'}>Other</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Description:
              <input
                type="text"
                defaultValue={this.props.store.dog.description}
                name="description"
                value={this.state.description}
                onChange={this.onInputChange('description')}
              />
            </label>
          </div>
          <div>
            <ImageUploader />
          </div>
        </form>
        <div>
          <button onClick={this.onCancelClick} style={{ marginRight: '20px' }}>
            Cancel
          </button>
          <button onClick={this.onSaveClick}>Save</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(EditPage));
