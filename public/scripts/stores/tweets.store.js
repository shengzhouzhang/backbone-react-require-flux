define(['jQuery', 'Backbone', 'EventEmitter', '../actions/actions'], 
       function ($, Backbone, EventEmitter, Actions) {
  'use strict';

  // Tweet Model
  // -----------

  var Tweet = Backbone.Model.extend({
  });

  // Tweet Collection
  // ----------------

  var Tweets = Backbone.Collection.extend({
    model: Tweet
  });

  // Tweet Store
  // -----------

  var baseClass = new EventEmitter();

  var store = $.extend({

    TWEETS_LOADED: 'TWEETS_LOADED',

    tweets: new Tweets(),

    getTweets: function () {
      return this.tweets.toJSON();
    },

    add: function (tweets) {
      this.tweets.add(tweets);
      this.emitEvent(this.TWEETS_LOADED); 
    },

    addEventListener: function (callback) {
      this.addListener(this.TWEETS_LOADED, callback);
    },

    removeEventListener: function (callback) {
      this.removeListener(this.TWEETS_LOADED, callback);
    },

  }, baseClass);

  // Handle Tweets Actions
  // ---------------------

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) { 
      case Actions.TWEETS_LOADED:

        // update tweets collection
        store.add(action.tweets);
        break; 
    }
    return true;
  });

  // return store as model
  // ---------------------

  return store;
});