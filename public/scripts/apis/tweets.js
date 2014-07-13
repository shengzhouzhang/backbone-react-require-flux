define(['jQuery'], 
        function ($) {
  'use strict';

  return {

    load: function (cb) {

      $.ajax({
        url: 'http://localhost:3000/tweets',
        type: "GET",
        dataType: "json",
        success: function (data) {
          cb(data);
        }
      });
    }
  };
});