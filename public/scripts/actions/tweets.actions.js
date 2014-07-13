define(['jQuery', '../dispatchers/dispatcher'], 
       function ($, Dispatcher) {
  'use strict';

  var actions = {

    // Tweets Actions
    // --------------

    LOAD_TWEETS: 'LOAD_TWEETS',
    TWEETS_LOADED: 'TWEETS_LOADED',

    loadTweets: function () {

      Dispatcher.handleServerAction({
        actionType: actions.LOAD_TWEETS
      });
    },

    updateTweets: function (tweets) {

      Dispatcher.handleStoreAction({
        actionType: actions.TWEETS_LOADED,
        tweets: tweets
      });
    },

    register: Dispatcher.register

  }; 

  return actions;
 });

