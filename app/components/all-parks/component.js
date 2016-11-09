import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  sortedParks: Ember.computed.sort('parks', 'sortDefinition'),
  sortDefinition: ['name'],
});
