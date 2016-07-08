import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | root page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('nav a.navbar-brand').text().trim(), 'DevSnap');
  });
});

test('displaying a table with developers', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('table tbody .snapchat-username').length, 3 );
    assert.equal(find('table tbody tr:first td:nth-child(1)').text().trim(), 'andrzejkrzywda' );
    assert.equal(find('table tbody tr:first td:nth-child(2)').text().trim(), 'Andrzej Krzywda' );
    assert.equal(find('table tbody tr:first td:nth-child(3)').text().trim(), 'Ruby, Rails, JavaScript, React, legacy, CEO, remote work, DDD' );
  });
});

test('opening a modal after clicking on snapchat username', function(assert) {
  visit('/');

  click('.snapchat-username:first a');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog').length, 1);
    assert.equal(find('h1').text().trim(), 'Andrzej Krzywda');
    assert.equal(currentURL(), '/developers/1');
  });

  click('.ember-modal-dialog button');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog').length, 0);
    assert.equal(currentURL(), '/');
  });
});

