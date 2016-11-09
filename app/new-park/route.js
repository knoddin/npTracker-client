import Ember from 'ember';

export default Ember.Route.extend({
  model () {
     return this.get('store').findAll('park');
   },

  actions: {

    createPark (data) {
      let park = this.get('store').createRecord('park', data);
      console.log(data);
      return park.save()
      .then(() => this.transitionTo('my-parks'));
    },
  },
  // activate: function(){
  //       $('body').css('background', "url('/assets/images/np.jpeg') no-repeat center center fixed");
  //       $('body').css('background-size', 'cover');
  //       Ember.$('body').append();
  //     },
  //
  // // when router exits the route
  // deactivate: function(){
  //       $('body').css('background', "none");
  //     },
});
