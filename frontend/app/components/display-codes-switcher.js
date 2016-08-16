import Ember from 'ember';

export default Ember.Component.extend({
  showOnlyCodes: Ember.inject.service(),
  showOnlyCodesEnabled: Ember.computed.readOnly('showOnlyCodes.enabled'),
  classNames: ['display-codes-switcher btn btn-primary-outline'],
  tagName: 'button',
  click() {
    this.get('showOnlyCodes').toggle();
  }
});
