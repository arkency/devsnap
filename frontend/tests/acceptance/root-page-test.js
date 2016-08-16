import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';
import PageObject from 'devsnap/tests/page-object';

const {
  visitable,
  clickable,
  text
} = PageObject;

const page = PageObject.create({
  visit: visitable('/'),

  brandText:                    text('nav a.navbar-brand'),
  firstSnapchatUsernameInTable: text('table tbody tr:first td:nth-child(1)'),
  firstFullNameInTable:         text('table tbody tr:first td:nth-child(2)'),
  firstAboutInTable:            text('table tbody tr:first td:nth-child(3)'),
  snapchatFullNameInModal:      text('h1'),
  snapchatUsernameInModal:      text('.ember-modal-dialog .snapchat-username'),
  snapchatAboutInModal:         text('.ember-modal-dialog .snapchat-about'),
  developersCounter:            text('.developers-count'),

  clickOnFirstSnapchatUsername: clickable('.snapchat-username:first a'),
  clickOnCloseButton:           clickable('.ember-modal-dialog button'),
  clickOnModalOverlay:          clickable('.ember-modal-overlay'),

  createRobocop() {
    return server.create('developer', {
      fullName: 'Robo Cop',
      about: 'Pif Paf'
    });
  },
  snapchatUsernames() {
    return find('table tbody .snapchat-username');
  },
  svgTagInModal() {
    return find('.ember-modal-dialog .snapchat-image svg');
  },
  modalDialog() {
    return find('.ember-modal-dialog');
  }
});


moduleForAcceptance('Acceptance | root page');

test('visiting /', function(assert) {
  page.visit();
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(page.brandText(), 'DevSnap');
  });
});

test('displaying a table with developers', function(assert) {
  const robocop = page.createRobocop();
  server.createList('developer', 3);
  page.visit();
  andThen(function() {
    assert.equal(page.snapchatUsernames().length, 4);
    assert.equal(page.firstSnapchatUsernameInTable(), robocop.id);
    assert.equal(page.firstFullNameInTable(), 'Robo Cop');
    assert.equal(page.firstAboutInTable(), 'Pif Paf');
  });
});

test('opening a modal after clicking on snapchat username', function(assert) {
  const robocop = page.createRobocop();
  page
    .visit()
    .clickOnFirstSnapchatUsername();
  andThen(function() {
    assert.equal(page.modalDialog().length, 1);
    assert.equal(currentURL(), '/developers/' + robocop.id);
  });
});

test('closing a modal after clicking on close button', function(assert) {
  page.createRobocop();
  page
    .visit()
    .clickOnFirstSnapchatUsername()
    .clickOnCloseButton();
  andThen(function() {
    assert.equal(page.modalDialog().length, 0);
    assert.equal(currentURL(), '/');
  });
});

test('closing a modal after clicking on overlay shadow', function(assert) {
  page.createRobocop();
  page
    .visit()
    .clickOnFirstSnapchatUsername()
    .clickOnModalOverlay();
  andThen(function() {
    assert.equal(page.modalDialog().length, 0);
    assert.equal(currentURL(), '/');
  });
});

test('if modal contains fullname, snapchat image, about and snapchat username', function(assert) {
  const robocop = page.createRobocop();
  page
    .visit()
    .clickOnFirstSnapchatUsername();
  andThen(function() {
    assert.equal(page.snapchatFullNameInModal(), robocop.fullName);
    assert.equal(page.svgTagInModal().length, 1);
    assert.equal(page.snapchatUsernameInModal(), robocop.id);
    assert.equal(page.snapchatAboutInModal(), robocop.about);
  });
});

test('developers counter in top navigation', function(assert) {
  server.createList('developer', 4);
  page.visit();
  andThen(function() {
    assert.equal(page.developersCounter(), '4');
  });
});
