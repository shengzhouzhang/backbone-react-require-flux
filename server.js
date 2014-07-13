#!/usr/bin/env node
'use strict';

require('amd-loader');

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    http = require('http'),
    tweets = require('./routes/tweets'),
    wiki = require('./routes/wikipedia');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/tweets', tweets.load);
app.post('/wiki', wiki.search);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});