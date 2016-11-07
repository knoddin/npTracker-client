import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('park', params.id);
  },


  actions: {

    deletePark (park) {
      park.destroyRecord()
      .then(() => this.transitionTo('about'));
    },

  },
});
