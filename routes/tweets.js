define(function(require, exports, module) {
  'use strict'

  var TwitterAPI = require('../lib/twitter').Twitter;

  var config = {
    "consumerKey": "PJRLbV20luTzVuSS3etAXw",
    "consumerSecret": "x3kAgUo3OOmV4jP60uNx2cPd47mO2iWiXhf7cjaHsRo",
    "accessToken": "200281781-dHMO9W0J3w6eqrgQ7f3E7Y6k4CdKofMK6a8Z2qOs",
    "accessTokenSecret": "BcVw6UhpOOjX8vaCKXrK3ytPP8WMq5ZAPNf8SUieqw",
    "callBackUrl": "http://szha246.github.io/apiexample/index.html"
  };

  var twitter = new TwitterAPI(config),
      error = function (err, response, body) {
        console.log('ERROR [%s]', err);
      };

  exports.load = function(req, res) {
    var params = { count: '2'};
    twitter.getHomeTimeline(params, error, function (data) {
      res.send(data);
    });
  };
});