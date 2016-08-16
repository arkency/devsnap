import Ember from 'ember';
import TransitionToListenerMixin from 'ember-cli-routing-service/mixins/transition-to-listener';

export default Ember.Route.extend(TransitionToListenerMixin, {
  init: function() {
    this._super.apply(this, arguments);
    this.setupTransitionToListener();
  }
});
