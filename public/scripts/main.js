require(['JSX!../components/tweets.react'], 
        function (Tweets) {
  'use strict'

  /**
   * Load and Initial Components.
   * Emit Ready Event when Components Ready
   */

  Tweets.initial(document.body);
  
  Tweets.render();
 });