define(['jQuery', '../config/rest.config'], 
        function ($, Config) {
  'use strict';

  return {

    search: function (keywords, cb) {

      var options = $.extend({

        data: JSON.stringify({ 'keywords': keywords }),
        
        success: function (data) {
          
          var text = 'No Page Found.';
          if(!!data.query && !!data.query.pages) {
            var pageid, pages = data.query.pages;
            for(pageid in pages) {
              if(!!pages[pageid].pageid) {
                text = pages[pageid].revisions[0]['*'];
              }
            }
          }
          cb(text);
        }

      }, Config.tooltip.load);

      $.ajax(options);
    }
  };
});