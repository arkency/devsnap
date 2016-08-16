import Ember from 'ember';

export default Ember.Service.extend({
  count: null,
  setCount(count) {
    this.set('count', count);
  },
  increment() {
    this.incrementProperty('count');
  }
});
