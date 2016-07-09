import Ember from 'ember';

export default Ember.Component.extend({
  developersCount: Ember.inject.service(),
  count: Ember.computed.readOnly('developersCount.count'),
  classNames: ['developers-count']
});
