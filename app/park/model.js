import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  user_id: DS.attr('number'),
  editable: DS.attr('boolean')
});
