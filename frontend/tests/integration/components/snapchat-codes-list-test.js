import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('snapchat-codes-list', 'Integration | Component | snapchat codes list', {
  integration: true,
  setup() {
   startMirage(this.container);
  }
});

test('it renders', function(assert) {
  const developers = server.createList('developer', 7);
  this.set('developers', developers);
  this.render(hbs`{{snapchat-codes-list developers=developers}}`);
  assert.equal(this.$().find('.image-box').length, 7);
});
