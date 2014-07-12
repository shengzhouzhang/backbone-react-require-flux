require.config({
  deps: ['JSX!../main'],

  paths: {
    jQuery: '../../lib/jquery-2.1.0.min',
    React: '../../lib/react',
    Backbone: '../../lib/backbone',
    EventEmitter: '../../lib/EventEmitter-4.0.3.min',
    JSX: '../../lib/jsx',
    JSXTransformer: '../../lib/JSXTransformer',
    Underscore: '../../lib/underscore',

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
    }
  }
});