import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['developers-list'],
  showOnlyCodesService: Ember.inject.service('show-only-codes'),
  showOnlyCodes: Ember.computed.readOnly('showOnlyCodesService.enabled')
});
