define(['jQuery', '../config/rest.config'], 
        function ($, Config) {
  'use strict';

  return {

    load: function (cb) {

      var options = $.extend({
        
        success: function (data) {
          cb(data);
        }

      }, Config.tweets.load);

      $.ajax(options);
    }
  };
});