import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    createPark (data) {
      let park = this.get('store').createRecord('park', data);
      console.log(data);
      return park.save()
      .then(() => this.transitionTo('index'));
    },
  },
});
