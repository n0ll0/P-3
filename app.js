var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
