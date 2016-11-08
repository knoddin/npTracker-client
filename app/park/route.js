import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log("i am in park route");
    return this.get('store').findRecord('park', params.park_id);
  },


  actions: {

    deletePark (park) {
      park.destroyRecord()
      .then(() => this.transitionTo('home'));
    },

  },
});
