/** @jsx React.DOM */
define(['jQuery', 'React', '../actions/actions', 
       '../stores/tweets.store', 'TweetEntity'], 
       function ($, React, Actions, Store, TweetEntity) {
  'use strict';

  // Tweet View
  // ----------

  var Tweet = React.createClass({

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
        <div className="col-lg-12">
          <h4>{this.props.tweet.user.name}</h4>
          <p onMouseUp={this.handleMouseUp}></p>
        </div>
      );
    }
  });

  // Tweet Connection View
  // ---------------------

  var Tweets = React.createClass({

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
        return (<Tweet key={tweet.id} tweet={tweet} />);
      });
      return (<div className="tweets">{tweets}</div>);
    }
  });

  // Return Initial Method
  // ---------------------

  return {

    component: null,

    initial: function (container) {

      if(!this.component) {
        this.component = React.renderComponent(
          <Tweets />, 
          container
        );
      }
    }
  };
});
