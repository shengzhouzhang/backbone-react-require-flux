define(['Backbone'], 
       function (Backbone) {
  'use strict'

  // Tweet Model
  // ----------------

  var Tweet = Backbone.Model.extend({
    defaults: {
      tweet: '',
    },
  });

  // Tweet Collection
  // ----------------

  var Tweets = Backbone.Collection.extend({
    model: Tweet,
  });

  return Tweets;
});