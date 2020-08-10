const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

const io = require('socket.io');
const redis = require('redis');

const UploaderS3Router = require('react-dropzone-s3-uploader');

// Route includes
const userRouter = require('./routes/user.router');
const dogRouter = require('./routes/dog.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//s3 uploader
app.use(
  's3',
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

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
