import Ember from 'ember';

export default Ember.Route.extend({
  // when router enters the route
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
