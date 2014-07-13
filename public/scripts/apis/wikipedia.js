define(['jQuery'], 
        function ($) {
  'use strict';

  return {

    search: function (keywords, cb) {

      $.ajax({
        url: 'http://localhost:3000/wiki',
        type: 'POST',
        data: JSON.stringify({ 'keywords': keywords }),
        contentType: 'application/json',
        dataType: 'json',
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
      });
    }
  };
});