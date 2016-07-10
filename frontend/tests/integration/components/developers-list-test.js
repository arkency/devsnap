import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import startMirage from '../../helpers/setup-mirage-for-integration';

//stub location showMeCodes service
const showOnlyCodesEnabled = Ember.Service.extend({
  enabled: true
});
const showOnlyCodesDisabled = Ember.Service.extend({
  enabled: false
});

moduleForComponent('developers-list', 'Integration | Component | developers list', {
  integration: true,
  setup() {
    startMirage(this.container);
  }
});

test('it renders table when showOnlyCodes service has `enabled` property equal false', function(assert) {
  this.register('service:show-only-codes', showOnlyCodesDisabled);
  const developers = server.createList('developer', 7);
  this.set('developers', developers);
  this.render(hbs`{{developers-list developers=developers}}`);
  assert.equal(this.$().find('table').length, 1);
  assert.equal(this.$().find('table tbody tr').length, 7);
  assert.equal(this.$().find('svg').length, 0);
  assert.equal(this.$().find('.container-fluid').length, 0);
});

test('it renders code list when showOnlyCodes service has `enabled` property equal true', function(assert) {
  this.register('service:show-only-codes', showOnlyCodesEnabled);
  const developers = server.createList('developer', 7);
  this.set('developers', developers);
  this.render(hbs`{{developers-list developers=developers}}`);
  assert.equal(this.$().find('.container-fluid').length, 1);
  assert.equal(this.$().find('svg').length, 7);
  assert.equal(this.$().find('table').length, 0);
});
