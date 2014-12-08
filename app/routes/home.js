import Ember from 'ember';

var HomeRoute = Ember.Route.extend({

  model: function(){
    return this.store.find('person');
  }

});

export default HomeRoute;
