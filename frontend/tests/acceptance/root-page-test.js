import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | root page');

const helpers = {
  createRobocop() {
    return server.create('developer', {
      snapchatUsername: 'robocop',
      fullName: 'Robo Cop',
      about: 'Pif Paf'
    });
  },
  clickOnFirstSnapchatUsername() {
    click('.snapchat-username:first a');
  }
};

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('nav a.navbar-brand').text().trim(), 'DevSnap');
  });
});

test('displaying a table with developers', function(assert) {
  helpers.createRobocop();
  server.createList('developer', 3);
  visit('/');

  andThen(function() {
    assert.equal(find('table tbody .snapchat-username').length, 4);
    assert.equal(find('table tbody tr:first td:nth-child(1)').text().trim(), 'robocop');
    assert.equal(find('table tbody tr:first td:nth-child(2)').text().trim(), 'Robo Cop');
    assert.equal(find('table tbody tr:first td:nth-child(3)').text().trim(), 'Pif Paf');
  });
});

test('opening a modal after clicking on snapchat username', function(assert) {
  const robocop = helpers.createRobocop();
  visit('/');

  helpers.clickOnFirstSnapchatUsername();
  andThen(function() {
    assert.equal(find('.ember-modal-dialog').length, 1);
    assert.equal(currentURL(), '/developers/' + robocop.id);
  });
});

test('closing a modal after clicking on close button', function(assert) {
  helpers.createRobocop();
  visit('/');

  helpers.clickOnFirstSnapchatUsername();
  click('.ember-modal-dialog button');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog').length, 0);
    assert.equal(currentURL(), '/');
  });
});

test('closing a modal after clicking on overlay shadow', function(assert) {
  helpers.createRobocop();
  visit('/');

  helpers.clickOnFirstSnapchatUsername();
  click('.ember-modal-overlay');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog').length, 0);
    assert.equal(currentURL(), '/');
  });
});

test('if modal contains fullname, snapchat image, about and snapchat username', function(assert) {
  const robocop = helpers.createRobocop();
  visit('/');

  helpers.clickOnFirstSnapchatUsername();
  andThen(function() {
    assert.equal(find('h1').text().trim(), robocop.fullName);
    assert.equal(find('.ember-modal-dialog .snapchat-image svg').length, 1);
    assert.equal(find('.ember-modal-dialog .snapchat-username').text().trim(), robocop.snapchatUsername);
    assert.equal(find('.ember-modal-dialog .snapchat-about').text().trim(), robocop.about);
  });
});
