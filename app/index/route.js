import Ember from 'ember';

export default Ember.Route.extend({
  // when router enters the route
  activate: function(){
        $('body').css('background', "url('http://i.imgur.com/8tFOa3P.jpg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append();
      },

  // when router exits the route
  deactivate: function(){
        $('body').css('background', "none");
      },

});
