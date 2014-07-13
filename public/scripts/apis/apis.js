define(['jQuery', '../actions/actions', '../apis/tweets', '../apis/wikipedia'], 
        function ($, Actions, Tweets, Wiki) {
  'use strict';

  Actions.register(function(payload) { 

    var action = payload.action; 

    switch(action.actionType) {
      
      case Actions.LOAD_TWEETS:

        // load tweets
        Tweets.load(function (tweets) {
          Actions.updateTweets(tweets);
        });
        break;

      case Actions.LOAD_TOOLTIP:

        // search key words
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