import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service(),
  actions: {
    goBackToDevelopers: function() {
      this.get('routing').transitionTo('developers');
    }
  }
});
