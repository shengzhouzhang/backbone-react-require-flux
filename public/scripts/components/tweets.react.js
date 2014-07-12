define(['React', '../stores/tweets'], 
       function (React, Store) {
  'use strict'

  function getTweets() { 
    return { 
      // tweets: Store.getTweets() 
      tweets: ['haha', 'lala']
    }; 
  }

  var Tweet = React.createClass({
    render: function () {
      return (<li><h3>{this.props.tweet}</h3></li>);
    }
  });

  var Tweets = React.createClass({

    getInitialState: function () {
      return {
        tweets: []
      };
    },

    componentDidMount: function () { 
      // Store.addEventListener(this._onLoad); 
    },

    componentWillUnmount: function () { 
      // Store.removeEventListener(this._onLoad); 
    },

    _onLoad: function () {
      var data = getTweets();
      this.setState(data);
    },
    
    render: function () {
      var tweets = this.state.tweets.map(function(tweet){
        return (<Tweet tweet={tweet} />);
      });
      return (<div><ul>{tweets}</ul></div>)
    }
  });

  return {

    initial: function (container) {
      this.container_ = container;
    },

    render: function () {
      React.renderComponent(
        <Tweets />, 
        this.container_
      );
    }
  };
});
