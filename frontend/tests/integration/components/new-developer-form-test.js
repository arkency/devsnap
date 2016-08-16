import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-developer-form', 'Integration | Component | new developer form', {
  integration: true
});

test('it renders form', function(assert) {
  this.render(hbs`{{new-developer-form}}`);
  assert.equal(this.$().find('form').length, 1);
});
