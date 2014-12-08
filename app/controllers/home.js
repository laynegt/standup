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

    'addPerson': function(){
      var name = this.get('newName'), self = this;

      if (!name || !name.trim()){
        return;
      }

      name = name.trim();

      // check for dupes
      this.store.find('person').then(function(names) {
        if (names.findBy('name', name)) {
          alert('Cannot add duplicate name!');
        }
        else {
          // if not a dupe, add it
          var person = self.store.createRecord('person', {
            name: name,
            present: true // assume is present if you're entering them...
          });

          person.save().then(function () {
            self.set('newName', '');
          });
        }
      });
    },

    'removePerson': function(person) {
      person.deleteRecord();
      person.save();
    }

  },

  notEnoughPeople: function(){
    return this.filterBy('present').get('length') <= 1;
  }.property('model.@each.present')

});

export default HomeController;
