import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  // park: DS.belongsTo('user', { inverse: 'park'})
});
