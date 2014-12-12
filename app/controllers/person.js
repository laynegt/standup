import Ember from "ember";

var PersonController = Ember.ObjectController.extend({

  isWinner: function(){
    return this.get('content') === this.parentController.get('randomWinner');
  }.property('parentController.randomWinner')

});

export default PersonController;
