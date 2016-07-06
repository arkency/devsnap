import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | root page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('nav a.navbar-brand').text().trim(), 'DevSnap');
    assert.equal(find('table tbody .snapchat-username').length, 3 );
    assert.equal(find('table tbody tr:first td:nth-child(1)').text().trim(), 'andrzejkrzywda' );
    assert.equal(find('table tbody tr:first td:nth-child(2)').text().trim(), 'Andrzej Krzywda' );
    assert.equal(find('table tbody tr:first td:nth-child(3)').text().trim(), 'Ruby, Rails, JavaScript, React, legacy, CEO, remote work, DDD' );
  });
});
