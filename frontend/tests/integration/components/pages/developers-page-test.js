import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pages/developers-page', 'Integration | Component | pages/developers page', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const model = [
    {
      id: 1,
      snapchatUsername: 'jacksparrow',
      fullName: 'Jack Sparrow',
      about: 'Sailing and drinking',
      snapcodeImage: '<some-code>'
    },
    {
      id: 2,
      snapchatUsername: 'spiderman',
      fullName: 'Spider Man',
      about: 'Spiderwebs',
      snapcodeImage: '<different-code>'
    }
  ];
  this.set('model', model);
  this.render(hbs`{{pages/developers-page model=model}}`);
  assert.equal(this.$().find('table').length, 1);
  assert.equal(this.$().find('table tbody tr').length, 2);
  assert.equal(this.$().find('table tbody tr:first td:nth-child(1)').text().trim(), 'jacksparrow' );
  assert.equal(this.$().find('table tbody tr:first td:nth-child(2)').text().trim(), 'Jack Sparrow' );
  assert.equal(this.$().find('table tbody tr:first td:nth-child(3)').text().trim(), 'Sailing and drinking' );
});
