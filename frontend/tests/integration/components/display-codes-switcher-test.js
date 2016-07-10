import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

//stub location showMeCodes service
const showOnlyCodesEnabled = Ember.Service.extend({
  enabled: true
});
const showOnlyCodesDisabled = Ember.Service.extend({
  enabled: false
});

moduleForComponent('display-codes-switcher', 'Integration | Component | display codes switcher', {
  integration: true
});

test('it renders different text depend on the state of showOnlyCodesService', function(assert) {
  this.register('service:show-only-codes', showOnlyCodesDisabled);
  this.render(hbs`{{display-codes-switcher}}`);
  assert.equal(this.$().text().trim(), 'Oh, just show me the codes!');
});

test('it renders different text depend on the state of showOnlyCodesService', function(assert) {
  this.register('service:show-only-codes', showOnlyCodesEnabled);
  this.render(hbs`{{display-codes-switcher}}`);
  assert.equal(this.$().text().trim(), 'Show me full table!');
});
