import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log("i am in my-parks route");
    return this.get('store').findAll('park');
  },

  deletePark () {
  
  }
});
