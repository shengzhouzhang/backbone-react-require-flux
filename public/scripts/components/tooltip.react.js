define(['React', '../actions/actions', '../stores/tooltip.store', 'jQuery', 'Bootstrap'], 
       function (React, Actions, Store, $) {
  'use strict';

  // Tooltips View
  // -------------

  var Tooltip = React.createClass({

    getInitialState: function () {
      return {
        tooltip: {
          keywords: '',
          wikitext: ''
        },
        position: {
          top: 0,
          left: 0,
          height: 0,
          width: 0
        }
      };
    },

    componentDidMount: function () { 
      Store.addEventListener(this._onLoad);
      $(this.getDOMNode()).hide();
    },

    componentWillUnmount: function () { 
      Store.removeEventListener(this._onLoad); 
    },

    // update position of tooltip
    componentDidUpdate: function () {

      $(this.getDOMNode())
        .css('position', 'absolute')
        .css('top', this.state.position.top)
        .css('left', this.state.position.left)
        .css('height', this.state.position.height)
        .css('width', this.state.position.width)
        .show();

      $(this.getDOMNode()).trigger( "click" ).hide();

      // a hack to update tooltip title
      $('h3.popover-title').html(this.state.tooltip.keywords);
    },

    _onLoad: function () {
      this.setState({ 
        tooltip: Store.getTooltip() 
      });
    },

    handleClick: function () {
      $(this.getDOMNode()).popover('toggle');
    },

    render: function () {
      return (
        <button type="button" className="btn btn-lg btn-danger" data-toggle="popover" 
        title={this.state.tooltip.keywords} data-content={this.state.tooltip.wikitext}
          onClick={this.handleClick}>
        </button>
      );
    }
  });

  return {

    component : null,

    initial: function (container) {

      this.component = React.renderComponent(
        <Tooltip />, 
        container
      );
    },

    render: function (keywords, position) {

      var state = {
        tooltip: {
          keywords: keywords
        },
        position: position 
      };

      this.component.setState(state);
    }
  };
});
