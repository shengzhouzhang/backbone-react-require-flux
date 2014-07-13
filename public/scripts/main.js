require(['../actions/actions', 'JSX!../components/builder', 'JSX!../apis/apis'], 
        function (Actions, Views, APIs) {
  'use strict';

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) {
      case Actions.COMPONENTS_READY:
        Actions.loadTweets();
        break;
    }
    return true;
  });

  Actions.initialComponents();
 });