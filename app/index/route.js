import Ember from 'ember';

export default Ember.Route.extend({

  activate: function(){
        $('body').css('background', "url('/assets/images/np.jpeg') no-repeat center center fixed");
        $('body').css('background-size', 'cover');
        Ember.$('body').append();
      },

  deactivate: function(){
        $('body').css('background', "none");
      },

});
