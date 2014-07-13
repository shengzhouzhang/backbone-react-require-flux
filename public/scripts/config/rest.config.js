define([], function () {
  'use strict';

  // Restful Settings 
  // ----------------

  return {
    tweets: {
      load: {
        url: document.URL + 'tweets',
        type: 'GET',
        dataType: 'json'
      }
    },
    tooltip: {
      load: {
        url: document.URL + 'wiki',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json'
      }
    }
  };
});