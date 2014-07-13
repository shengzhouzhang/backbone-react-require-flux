require(['../actions/actions', '../components/builder', '../apis/apis'], 
        function (Actions) {
  'use strict';

  // Handle App Actions
  // ------------------

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) {
      case Actions.COMPONENTS_READY:
        Actions.loadTweets();
        break;
    }
    
    return true;
  });

  // Dispatch App Actions
  // --------------------

  Actions.initialComponents();

});