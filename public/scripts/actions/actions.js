define(['jQuery', '../actions/tweets.actions', '../actions/tooltip.actions', '../dispatchers/dispatcher'], 
       function ($, TweetsActions, TooltipActions, Dispatcher) {
  'use strict';

  var actions = $.extend({

    // APP actions
    // -----------

    INITIAL_COMPONENTS: 'INITIAL_COMPONENTS',
    COMPONENTS_READY: 'COMPONENTS_READY',

    initialComponents: function() {
      Dispatcher.handleViewAction({
        actionType: actions.INITIAL_COMPONENTS
      });
    },

    componentsReady: function() {
      Dispatcher.handleViewAction({
        actionType: actions.COMPONENTS_READY
      });
    },

  }, TweetsActions, TooltipActions);

  return actions;
 });

