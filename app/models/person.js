import DS from 'ember-data';

var Person = DS.Model.extend({
    'name': DS.attr('string'),
    'present': DS.attr('boolean')
});

Person.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Layne',
      present: true
    },
    {
      id: 2,
      name: 'Cristiano',
      present: true
    },
    {
      id: 3,
      name: 'Isco',
      present: false
    }
  ]
});

export default Person;
