import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service(),
  actions: {
    goBackToDevelopers() {
      this._goBackToDevelopers();
    },
    onSubmitHandler() {
      this.set('submittingForm', true);
    },
    onSaveHandler() {
      this.set('submittingForm', false);
      this._goBackToDevelopers();
    }
  },
  _goBackToDevelopers() {
    if(this.get('submittingForm')) {
      return;
    }
    this.get('routing').transitionTo('developers');
  }
});
