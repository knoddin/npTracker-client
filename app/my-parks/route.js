import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log("i am in my-parks route");
    return this.get('store').findAll('park');
  },

  actions: {
    deletePark (params) {
      console.log(params);

    },
  },

  activate: function(){
        $('body').css('background', "url('/assets/images/np.jpeg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append();
      },

  // when router exits the route
  deactivate: function(){
        $('body').css('background', "none");
      },
});
