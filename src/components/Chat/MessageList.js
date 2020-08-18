import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function MessageList(props) {
  const { user } = props;
  const messages = useSelector((store) => store.chatMessages);

  return (
    <List component="ul" aria-label="messages">
      {messages.length > 0 ? (
        messages.map((item, index) => {
          return (
            <ListItem key={index}>
              {item.displayName === user.username ? (
                <>
                  <ListItemText primary={item.message} />
                  <ListItemIcon>
                    <Chip label={item.displayName} color="primary" />
                  </ListItemIcon>
                </>
              ) : (
                <>
                  <ListItemIcon>
                    <Chip label={item.displayName} />
                  </ListItemIcon>
                  <ListItemText primary={item.message} />
                </>
              )}
            </ListItem>
          );
        })
      ) : (
        <ListItem>
          <ListItemText primary="No messages." />
        </ListItem>
      )}
    </List>
  );
}

export default connect(mapStoreToProps)(MessageList);
