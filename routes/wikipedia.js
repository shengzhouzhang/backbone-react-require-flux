define(function(require, exports, module) {
  'use strict'
  
  var request = require('request');

  exports.search = function(req, res) {

    var keywords = req.body.keywords;

    if(!!req.body && !!keywords) {
      
      var url = 'http://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=' + 
            encodeURIComponent(keywords) + '&rvprop=content&format=json&rvsection=0';

      console.log('Search: ', url);

      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(body);
        }
      });
    }
  };
});