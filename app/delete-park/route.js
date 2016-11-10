import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('park', params.park_id);
  },


  actions: {

    deletePark (park) {
      park.destroyRecord()
      .then(() => this.transitionTo('my-parks'));
    },
  },
});
