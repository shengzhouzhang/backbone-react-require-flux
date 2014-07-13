define(['jQuery', '../actions/actions', 
       'JSX!../components/tweets.react', 'JSX!../components/tooltip.react'], 
        function ($, Actions, Tweets, Tooltip) {
  'use strict';

  // Handle View Actions
  // -------------------

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) {

      // Initial All Components
      // ----------------------

      case Actions.INITIAL_COMPONENTS: 

        Tweets.initial($('#tweets-page')[0]);
        Tooltip.initial($('#tooltips-page')[0]);

        Actions.componentsReady();
        break; 

      // Render Tooltip
      // --------------

      case Actions.LOAD_TOOLTIP: 

        // position {top, left}
        var keywords = action.keywords,
            position = action.position;

        if(!!position && !!position.top && !!position.left) {
          Tooltip.render(keywords, position);
        }
        
        break; 
    }

    return true;
  });

  return;
});