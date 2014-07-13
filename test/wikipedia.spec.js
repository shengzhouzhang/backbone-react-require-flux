#!/usr/bin/env node
'use strict';

require('amd-loader');

var assert = require("assert"),
    wiki = require('../routes/wikipedia');

describe('tweets', function(){

    it('should return pages', function (done) {
      this.timeout(10000);

      var req = {
            body: {
              keywords: 'Mocha'
            }
          },
          res = {
            send: function (data) {
              var pages = JSON.parse(data);
              assert.ok(pages.query.pages);
              done();
            }
          };

      wiki.search(req, res);
    });
});