import Ember from 'ember';

export default Ember.Component.extend({
  showOnlyCodesService: Ember.inject.service('show-only-codes'),
  showOnlyCodes: Ember.computed.readOnly('showOnlyCodesService.enabled')
});
