import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePark () {
      this.sendAction('deletePark', this.get('park'));
      // console.log(this.get('park'));
    },
  },
});
