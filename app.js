var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

/*
 The "catchall" handler: all other handlers go above this
*/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;
