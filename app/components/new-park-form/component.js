import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  park: {},

  actions: {
   submit () {
     this.sendAction('createPark', this.get('park'));
   },

   reset () {
     this.set('park', {});
   },
 },
 });
