import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pages/developers/new-page', 'Integration | Component | pages/developers/new page', {
  integration: true
});

test('it renders', function(assert) {
  const modalDialogService = this.container.lookup('service:modal-dialog');
  modalDialogService.destinationElementId = 'fancy-div';
  this.set('destinationElementId', 'ember-testing');
  this.render(hbs`<div id='fancy-div'></div>{{pages/developers/new-page}}`);
  assert.equal(this.$().find('.new-developer-modal').length, 1);
});
