define(['React', '../actions/actions', '../stores/tweets.store', 'TweetEntity'], 
       function (React, Actions, Store, TweetEntity) {
  'use strict';

  // Tweet View
  // ----------

  var Tweet = React.createClass({

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

    componentDidMount: function () {
      var tweet = TweetEntity.parse(this.props.tweet);
      // a hack to show link
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

  // Tweet List View
  // ---------------

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

    _onLoad: function () {
      this.setState({ 
        tweets: Store.getTweets() 
      });
    },
    
    render: function () {
      var tweets = this.state.tweets.map(function (tweet) {
        return (<Tweet key={tweet.id} tweet={tweet} />);
      });
      return (<div className="tweets">{tweets}</div>)
    }
  });

  return {

    initial: function (container) {

      React.renderComponent(
        <Tweets />, 
        container
      );
    }
  };
});
