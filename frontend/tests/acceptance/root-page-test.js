import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | root page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('nav a.navbar-brand').text().trim(), 'DevSnap');
    assert.equal(find('.developer-full-name').length, 3 );
  });
});
