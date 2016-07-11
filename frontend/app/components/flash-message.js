import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    close() {
      this.attrs.onClose();
    }
  }
});
