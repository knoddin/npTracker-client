import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log("i am in my-parks route");
    return this.get('store').findAll('park');
  },


});


// getPark (data) {
//   let park = this.get('store').createRecord('park', data);
//   console.log(data);
//   return park.save()
//   .then(() => this.transitionTo('index'));
// },
