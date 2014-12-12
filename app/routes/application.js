import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function(){
    this._super();

    this.render('status-bar', {
      into: 'application',
      outlet: 'status-bar'
    });
  }

});
