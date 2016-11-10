import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: ['form'],

  profile: {},

  actions: {
    updatePark () {
      this.sendAction('updatePark', this.get('park'));

    },
    reset () {
      this.set('park', {});
    },
  },
});
