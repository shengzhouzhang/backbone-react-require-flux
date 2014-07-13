require.config({
  deps: ['JSX!../main'],

  paths: {
    jQuery: '../../lib/jquery-2.1.0.min',
    Bootstrap: '../../lib/bootstrap-3.2.0/js/bootstrap.min',
    React: '../../lib/react',
    Backbone: '../../lib/backbone',
    EventEmitter: '../../lib/EventEmitter-4.0.3.min',
    JSX: '../../lib/jsx',
    JSXTransformer: '../../lib/JSXTransformer',
    Underscore: '../../lib/underscore',
    TweetEntity: '../../lib/twitter-entities'
  },
  shim : {
    jQuery : {
      exports: '$'
    },
    JSXTransformer: {
      exports: 'JSXTransformer'
    },
    Backbone: {
      deps: ['Underscore', 'jQuery'],
      exports: function() {
        return Backbone.noConflict();
      }
    },
    Bootstrap: {
      deps: ['jQuery'],
      exports: '$.fn.popover'
    }
  }
});