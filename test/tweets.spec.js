#!/usr/bin/env node
'use strict';

require('amd-loader');

var assert = require("assert"),
    Tweets = require('../routes/tweets');

describe('tweets', function(){

    it('should return 10 tweet objects', function (done) {
      this.timeout(10000);

      var res = {
        send: function (data) {
          var tweets = JSON.parse(data);
          assert.equal(tweets.length, 10);
          done();
        }
      };

      Tweets.load(null, res);
    });

    it('should return username', function (done) {
      this.timeout(10000);

      var res = {
        send: function (data) {
          var tweets = JSON.parse(data);
          assert.ok(tweets[0].user.name);
          done();
        }
      };

      Tweets.load(null, res);
    });
});