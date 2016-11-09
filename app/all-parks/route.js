import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('park');
    // change this to my-park to reroute to my-parks in api
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
