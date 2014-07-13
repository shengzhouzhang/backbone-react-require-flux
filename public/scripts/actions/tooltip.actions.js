define(['jQuery', '../dispatchers/dispatcher'], 
       function ($, Dispatcher) {
  'use strict';

  var actions = {

    // Tooltip actions
    // -------------------

    LOAD_TOOLTIP: 'LOAD_TOOLTIP',
    TOOLTIP_LOADED: 'TOOLTIP_LOADED',

    loadTooltip: function (keywords, position) {

      Dispatcher.handleServerAction({
        actionType: actions.LOAD_TOOLTIP,
        keywords: keywords,
        position: position
      });
    },

    updateTooltip: function (tooltip) {

      Dispatcher.handleStoreAction({
        actionType: actions.TOOLTIP_LOADED,
        tooltip: tooltip
      });
    },

    register: Dispatcher.register

  }; 

  return actions;
 });

