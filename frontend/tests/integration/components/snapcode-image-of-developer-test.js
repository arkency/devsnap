import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('snapcode-image-of-developer', 'Integration | Component | snapcode image of developer', {
  integration: true
});

test('it renders snapcodeImage when it is defined', function(assert) {
  const developer = {
    snapchatUsername: 'testuser',
    snapcodeImage: '<snapcode />'
  };
  this.set('developer', developer);
  this.render(hbs`{{snapcode-image-of-developer developer=developer}}`);
  assert.equal(this.$().find('snapcode').length, 1);
});

test('it renders img tag when snapcodeImage is not defined', function(assert) {
  const developer = {
    snapchatUsername: 'testuser',
    snapcodeImage: null
  };
  this.set('developer', developer);
  this.render(hbs`{{snapcode-image-of-developer developer=developer}}`);
  assert.equal(this.$().find('img').length, 1);
});
