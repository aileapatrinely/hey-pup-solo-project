import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@material-ui/core';

function MessageList(props) {
  const { messages, user } = props;
  return (
    <List component="ul" aria-label="messages">
      {messages.length > 0 ? (
        messages.map((item, index) => {
          return (
            <ListItem key={index}>
              {item.displayName === user.username ? (
                <>
                  <ListItemText primary={item.messages} />
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

export default MessageList;
