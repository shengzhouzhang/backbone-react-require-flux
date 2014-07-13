define(['Backbone', 'EventEmitter', '../actions/actions'], 
       function (Backbone, EventEmitter, Actions) {
  'use strict';

  // Tooltip Model
  // -------------

  var Tweet = Backbone.Model.extend({
    defaults: {
      keywords: '',
      wikitext: ''
    },
  });

  // Tooltip Store
  // -------------

  var baseClass = new EventEmitter(),
      tooptip = {};

  var store = $.extend({

    LOAD_EVENT: 'LOAD_EVENT',

    getTooltip: function () {
      return tooptip;
    },

    loaded: function () {
      this.emitEvent(this.LOAD_EVENT); 
    },

    addEventListener: function (callback) {
      this.addListener(this.LOAD_EVENT, callback);
    },

    removeEventListener: function (callback) {
      this.removeListener(this.LOAD_EVENT, callback);
    },

  }, baseClass);

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) { 
      case Actions.TOOLTIP_LOADED: 

        tooptip = action.tooltip
        store.loaded(); 
        break; 
    }
    return true;
  });

  return store;
});