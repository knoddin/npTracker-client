import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('park', {path: '/parks/:park_id'});
  this.route('new-park');
  this.route('parks');
  this.route('user-parks');
  this.route('my-parks');
  this.route('all-parks');
});

export default Router;
