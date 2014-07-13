define(['jQuery', '../actions/actions', '../apis/tweets', '../apis/wikipedia'], 
        function ($, Actions, Tweets, Wiki) {
  'use strict';

  // Handle Server Actions
  // ---------------------

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) {
      
      // Load Tweets
      // -----------

      case Actions.LOAD_TWEETS:
        Tweets.load(function (tweets) {
          Actions.updateTweets(tweets);
        });
        break;

      // Load Tooltip
      // ------------
      
      case Actions.LOAD_TOOLTIP:

        var keywords = action.keywords;

        if(!!keywords) {

          Wiki.search(keywords, function (text) {

            var tooltip = {
              keywords: keywords,
              wikitext: text
            };

            Actions.updateTooltip(tooltip);
          });
        }
        break;
    }
    return true;
  });
});