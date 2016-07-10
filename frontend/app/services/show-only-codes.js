import Ember from 'ember';

export default Ember.Service.extend({
  enabled: false,
  toggle() {
    this.toggleProperty('enabled');
  }
});
