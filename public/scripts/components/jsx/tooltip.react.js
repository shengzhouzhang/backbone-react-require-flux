/** @jsx React.DOM */
define(['jQuery', 'React', '../actions/actions', 
       '../stores/tooltip.store', 'Bootstrap'], 
       function ($, React, Actions, Store) {
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

    // Hide Bootstrap Button
    // ---------------------

    componentDidMount: function () { 
      Store.addEventListener(this._onLoad);
      $(this.getDOMNode()).hide();
    },

    componentWillUnmount: function () { 
      Store.removeEventListener(this._onLoad); 
    },

    // Click Bootstrap Button and Show Tooltip
    // ---------------------------------------

    componentDidUpdate: function () {

      $(this.getDOMNode())
        .css('position', 'fixed')
        .css('top', this.state.position.top)
        .css('left', this.state.position.left)
        .css('height', this.state.position.height)
        .css('width', this.state.position.width)
        .show();

      $(this.getDOMNode()).trigger('click').hide();

      // a hack to update tooltip title
      $('h3.popover-title').html(this.state.tooltip.keywords);
    },

    // Load from Store, Tooltip Model
    // ------------------------------

    _onLoad: function () {
      this.setState({ 
        tooltip: Store.getTooltip() 
      });
    },

    handleClick: function (event) {
      event.preventDefault();
      $(this.getDOMNode()).popover('toggle');
    },

    // Render a Bootstrap Button
    // -------------------------

    render: function () {
      return (
        <button type="button" className="btn" data-toggle="popover" 
        title={this.state.tooltip.keywords} 
        data-content={this.state.tooltip.wikitext}
        data-placement="right"
          onClick={this.handleClick}>
        </button>
      );
    }
  });

  // Return Initial & Render Method
  // ------------------------------

  return {

    component : null,

    initial: function (container) {

      if(!this.component) {
        this.component = React.renderComponent(
          <Tooltip />, 
          container
        );
      }
    },

    render: function (keywords, position) {
      if(!this.component) return;

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
