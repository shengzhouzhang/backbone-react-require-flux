define(['jQuery', 'Backbone', 'EventEmitter', '../actions/actions'], 
       function ($, Backbone, EventEmitter, Actions) {
  'use strict';

  // Tooltip Model
  // -------------

  var Tooltip = Backbone.Model.extend({
  });

  // Tooltip Store
  // -------------

  var baseClass = new EventEmitter();

  var store = $.extend({

    TOOLTIP_LOADED: 'TOOLTIP_LOADED',

    tooltip: new Tooltip(),

    getTooltip: function () {
      return this.tooltip.toJSON();
    },

    update: function (tooltip) {
      this.tooltip.set(tooltip);
      this.emitEvent(this.TOOLTIP_LOADED);
    },

    addEventListener: function (callback) {
      this.addListener(this.TOOLTIP_LOADED, callback);
    },

    removeEventListener: function (callback) {
      this.removeListener(this.TOOLTIP_LOADED, callback);
    },

  }, baseClass);

  // Handle Tooltip Actions
  // ----------------------

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) { 
      case Actions.TOOLTIP_LOADED: 

        // update tooltip model
        store.update(action.tooltip);
        break; 
    }
    return true;
  });

  // return store as model
  // ---------------------
  
  return store;
});