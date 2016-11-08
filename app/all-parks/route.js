import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('park');
    // change this to my-park to reroute to my-parks in api
  },

  // getPark (data) {
  //   let park = this.get('store').createRecord('park', data);
  //   console.log(data);
  //   return park.save()
  //   .then(() => this.transitionTo('index'));
  // },
});
