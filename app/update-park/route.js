import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('park', params.id);
  },
  //
  actions: {
    updatePark (data) {
      this.get('store').findRecord('park', data.id)
      .then((park) => {
        park.name = data.name;
        park.location = data.location;
        park.description = data.description;
        park.save();
      })
       .then(() => this.transitionTo('my-parks'));
     },
  },
});
