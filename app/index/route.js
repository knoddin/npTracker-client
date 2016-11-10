import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    Ember.$('body').css('background', 'url("/assets/images/np.jpeg") no-repeat center center fixed');
    Ember.$('body').css('background-size', 'cover');
  },

  // when router exits the route
  deactivate: function(){
    Ember.$('body').css('background', "none");
  },
});
