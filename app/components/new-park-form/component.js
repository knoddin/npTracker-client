import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: ['form'],

  park: {},

  actions: {
   createPark () {
     this.sendAction('createPark', this.get('park'));
   },

   reset () {
     this.set('park', {});
   },
 },
});
