define(['Backbone', 'EventEmitter', '../actions/actions'], 
       function (Backbone, EventEmitter, Actions) {
  'use strict';

  // Tweet Model
  // -----------

  var Tweet = Backbone.Model.extend({
    defaults: {
      user: '',
      tweet: '',
      timestamp: ''
    },
  });

  // Tweet Collection
  // ----------------

  var Tweets = Backbone.Collection.extend({
    model: Tweet,
  });

  // Tweet Store
  // -----------

  var baseClass = new EventEmitter(),
      tweets = new Tweets();

  var store = $.extend({

    LOAD_EVENT: 'TWEETS_LOADED',

    getTweets: function () {
      return tweets.toJSON();
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

  // emit event after data changed
  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) { 
      case Actions.TWEETS_LOADED:

        // update collection
        tweets.add(action.tweets);
        store.loaded(); 
        break; 
    }
    return true;
  });

  return store;
});