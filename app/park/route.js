import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    console.log("i am in park route");
    return this.get('store').findRecord('park', params.park_id);
  },


  actions: {

    deletePark (park) {
      return park.destroyRecord()
      .then(() => {
        this.transitionTo('my-parks');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There seems to be a problem! Try again.');
      });
    },

  },
});
