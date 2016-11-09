import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('application'))
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
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
