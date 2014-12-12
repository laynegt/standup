import Ember from "ember";

var HomeController = Ember.ArrayController.extend({

  actions: {

    'togglePresent': function(person){
      person.toggleProperty('present');
    },

    'pickWinner': function(){
      var people = this.get('model').filterBy('present');

      var length = people.get('length');

      // pick a random winner
      var randomIndex = Math.floor(Math.random() * length);
      this.set('randomWinner', people.objectAt(randomIndex));
    },

    'scrollWinners': function(){
      var self = this;

      var callPickWinner = function(){
        self.send('pickWinner');
      };
      for(var i=1; i<=6; i++) {
        Ember.run.later(callPickWinner, 300*i);
      }
    },

    'addPerson': function(){
      var name = this.get('newName'), self = this;

      if (!name || !name.trim()){
        return;
      }

      name = name.trim();

      // check for dupes
      var names = this.get('model').mapBy('name');
      if (names.find(function(item){
          return item.toLowerCase() === name.toLowerCase();
        })) {
        alert('Cannot add duplicate name!');
        return;
      }
      else {
        // if not a dupe, add it
        var person = self.store.createRecord('person', {
          name: name,
          present: true // assume is present if you're entering them...
        });

        person.save().then(function () {
          self.set('newName', '');

          Ember.$('#new_name').focus();
        });
      }

    },

    'removePerson': function(person) {
      if (confirm('Delete ' + person.get('name') + '?')) {
        person.deleteRecord();
        person.save();
      }
    }

  },

  notEnoughPeople: function(){
    return this.filterBy('present').get('length') <= 1;
  }.property('model.@each.present')

});

export default HomeController;
