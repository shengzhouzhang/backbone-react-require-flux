define(function(require, exports, module) {
  'use strict'
  
  exports.search = function(req, res) {
    var words = req.body;
    console.log('Key words: ' + JSON.stringify(words));

    res.send('wiki');
  };
});