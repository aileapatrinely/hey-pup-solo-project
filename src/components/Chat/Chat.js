import React, { Component } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField, Button, Grid } from '@material-ui/core';

let socket = {};
class Chat extends Component {
  state = {
    typedMsg: '',
    messages: [],
  };

  componentDidMount() {
    socket = io.connect('http://localhost:3000');
  }
  initWatchers() {
    if (
      !this.props.store.user.id ||
      !this.props.store.chatWith.id ||
      this.isChatty
    ) {
      return false;
    }
    this.isChatty = true;

    const currentUser = this.props.store.user.id;
    const chatWithUser = this.props.store.chatWith.id;
    this.roomKey =
      currentUser < chatWithUser
        ? `room_${currentUser}_${chatWithUser}`
        : `room_${chatWithUser}_${currentUser}`;
    this.messageKey = `new_message_${this.roomKey}`;

    socket.emit(
      'JOIN_CHAT',
      {
        displayName: this.props.store.username,
        room: `room_${this.props.store.user.id}`,
      },
      (joinData) => {
        console.log('Joined chat:', joinData);
      }
    );

    socket.on(this.messageKey, (data) => {
      const { messages } = data;
      this.props.dispatch({ type: 'SET_CHAT_MESSAGES', payload: messages });
    });
  }

  // socket.on(`new_message_room_${this.props.store.user.id}`, (data) => {
  //   const { messages } = data;
  //   this.setState({
  //     messages,
  //   });
  // });

  componentWillUnmount() {
    if (socket.emit) {
      socket.emit('disconnect');
      socket.off();
    }
  }

  changeMessage(event) {
    this.setState({
      typedMsg: event.target.value,
    });
  }
  onSubmitChatter(event) {
    event.preventDefault();
    console.log('Send Message', socket);
    socket.emit(
      'CHAT_MESSAGE',
      {
        room: `room_${this.props.store.user.id}`,
        displayName: this.props.store.user.username,
        message: this.state.typedMsg,
      },
      (chatData) => {
        console.log('Emit msg:', chatData);
      }
    );

    this.setState({
      typedMsg: '',
    });
  }

  render() {
    this.initWatchers();

    const disableChat = !this.props.store.chatWith;
    console.log('disableChat:', disableChat);

    return (
      <div>
        <form onSubmit={(event) => this.onSubmitChatter(event)}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={8}>
              <TextField
                variant="filled"
                fullWidth
                label="Message"
                disabled={disableChat}
                value={this.state.typedMsg}
                onChange={(event) => this.changeMessage(event)}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
                size="large"
                disabled={disableChat}
              >
                SEND
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Chat;
