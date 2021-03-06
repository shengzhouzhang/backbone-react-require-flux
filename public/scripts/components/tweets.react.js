/** @jsx React.DOM */
define(['jQuery', 'React', '../actions/actions', 
       '../stores/tweets.store', 'TweetEntity'], 
       function ($, React, Actions, Store, TweetEntity) {
  'use strict';

  // Tweet View
  // ----------

  var Tweet = React.createClass({displayName: 'Tweet',

    // Dispatch Tooltip Action
    // -----------------------

    handleMouseUp: function (e) {
      var selection = window.getSelection(),
          text = selection.toString();

      if(!!text) {

        var rect = selection.getRangeAt(0).getBoundingClientRect(),
            position = {
              top: rect.top,
              left: rect.left,
              height: rect.height,
              width: rect.width
            };

        Actions.loadTooltip(text, position);
      }
    },

    // Prettify Tweet
    // --------------

    componentDidMount: function () {
      var tweet = TweetEntity.parse(this.props.tweet);
      // a hack to show the links of tweet
      $(this.getDOMNode()).find('p').html(tweet);
    },

    render: function () {
      return (
        React.DOM.div( {className:"col-lg-12"}, 
          React.DOM.h4(null, this.props.tweet.user.name),
          React.DOM.p( {onMouseUp:this.handleMouseUp})
        )
      );
    }
  });

  // Tweet Connection View
  // ---------------------

  var Tweets = React.createClass({displayName: 'Tweets',

    getInitialState: function () {
      return {
        tweets: []
      };
    },

    componentDidMount: function () { 
      Store.addEventListener(this._onLoad); 
    },

    componentWillUnmount: function () { 
      Store.removeEventListener(this._onLoad); 
    },

    // Load from Store, Tweet Collection
    // ---------------------------------

    _onLoad: function () {
      this.setState({ 
        tweets: Store.getTweets() 
      });
    },
    
    // Render a list of Tweet View 
    // ---------------------------

    render: function () {
      var tweets = this.state.tweets.map(function (tweet) {
        return (Tweet( {key:tweet.id, tweet:tweet} ));
      });
      return (React.DOM.div( {className:"tweets"}, tweets));
    }
  });

  // Return Initial Method
  // ---------------------

  return {

    component: null,

    initial: function (container) {

      if(!this.component) {
        this.component = React.renderComponent(
          Tweets(null ), 
          container
        );
      }
    }
  };
});
