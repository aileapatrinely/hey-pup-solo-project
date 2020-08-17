const express = require('express');
const SocketIO = require('socket.io');
const http = require('http');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const httpServer = http.createServer(app);

const passport = require('./strategies/user.strategy');

const io = SocketIO(httpServer);
const redis = require('redis');

const UploaderS3Router = require('react-dropzone-s3-uploader/s3router');

// Route includes
const userRouter = require('./routes/user.router');
const dogRouter = require('./routes/dog.router');
const imageUrlRouter = require('./routes/imageurl.router');
const otherdogs = require('./routes/otherdogs.router');
const { Socket } = require('dgram');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//s3 uploader
app.use(
  '/s3',
  UploaderS3Router({
    bucket: 'hey-pup',
    region: 'us-east-2',
    headers: { 'Access-Control-Allow-Origin': '*' },
    ACL: 'public-read',
  })
);

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/dog', dogRouter);
app.use('/api/imageurl', imageUrlRouter);
app.use('/api/fetch', otherdogs);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

//Socket.io Connection
io.on('CHAT_MESSAGE', (data, callbackFxn) => {
  try {
    const { message, displayName, room } = data;
    console.log('CHAT_MESSAGE', chatRooms);
    if (!chatRooms[room]) {
      throw 'Now active.';
    }

    chatRooms[room].message.push({
      displayName,
      message,
    });
    callbackFxn({ chats: chatRooms });
    io.emit(`new_message_${room}`, chatRooms[room]);
  } catch (err) {
    callbackFxn({
      error: err,
      errorMsg: 'There was a problem sending your message.',
    });
  }
  console.log('Socket Message:', data);
});

io.on('JOIN_CHAT', (data, callbackFxn) => {
  try {
    const { displayName, room } = data;

    if (!chatRooms[room]) {
      chatRooms[room] = {
        users: [displayName],
        messages: [],
      };
    } else if (chatRooms[room].users.length < 2) {
      chatRooms[room].users.push(displayName);
    }

    callbackFxn({ chats: chatRooms });
  } catch (err) {
    callbackFxn({
      error: err,
      errorMsg: 'There was a problem connecting chat.',
    });
  }
});

io.on('disconnect', (data) => {
  console.log('Disconnect Socket:', data);
});

/** Listen * */
httpServer.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
