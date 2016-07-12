import Ember from 'ember';

export default Ember.Service.extend({
  developer: null,
  setDeveloper(developer) {
    this.set('developer', developer);
  }
});
