define(['../actions/actions', 'JSX!../components/tweets.react', 'JSX!../components/tooltip.react'], 
        function (Actions, Tweets, Tooltip) {
  'use strict';

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) {

      // initial all components
      // ----------------------

      case Actions.INITIAL_COMPONENTS: 

        Tweets.initial(document.getElementById('tweets-page'));
        Tooltip.initial(document.getElementById('tooltips-page'));

        // fire ready event after initializaton
        Actions.componentsReady();
        break; 

      // update component states
      // -----------------------

      case Actions.LOAD_TOOLTIP: 

        // position {top, left}
        var keywords = action.keywords,
            position = action.position

        if(!!position && !!position.top && !!position.left) {
          Tooltip.render(keywords, position);
        }
        
        break; 
    }

    return true;
  });

  return;
});