import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | developers/new page');

const helpers = {
  fillAllFields() {
    fillIn('input#developer-snapchat-username', 'Test');
    fillIn('input#developer-full-name', 'Test');
    fillIn('textarea#developer-about', 'Test');
  }
};

test('visiting /developers/new', function(assert) {
  visit('/developers/new');

  andThen(function() {
    assert.equal(currentURL(), '/developers/new');
    assert.equal(find('.ember-modal-dialog form').length, 1);
  });
});

test('the submit button should be disabled when form is not touched', function(assert) {
  visit('/developers/new');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form button[type="submit"]:disabled').length, 1);
  });
});

test('should close modal after clicking on cancel button', function(assert) {
  visit('/developers/new');

  andThen(function() {
    assert.equal(currentURL(), '/developers/new');
  });
  click('form .cancel-button');
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(find('.ember-modal-dialog form').length, 0);
  });
});

test('the submit button should be enabled when all fields are filled', function(assert) {
  visit('/developers/new');
  helpers.fillAllFields();
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form button[type="submit"]:disabled').length, 0);
  });
});

test('an error should be displayed when any field is blank', function(assert) {
  visit('/developers/new');
  fillIn('input#developer-snapchat-username', '');
  fillIn('input#developer-full-name', 'Test');
  fillIn('textarea#developer-about', 'Test');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form button[type="submit"]:disabled').length, 1);
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
    assert.equal(find('.ember-modal-dialog .snapchat-username-field .help-block').text().trim(), "can't be blank!");
  });

  fillIn('input#developer-snapchat-username', 'Test');
  fillIn('input#developer-full-name', '');
  fillIn('textarea#developer-about', 'Test');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form button[type="submit"]:disabled').length, 1);
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
    assert.equal(find('.ember-modal-dialog .fullname-field .help-block').text().trim(), "can't be blank!");
  });

  fillIn('input#developer-snapchat-username', 'Test');
  fillIn('input#developer-full-name', 'Test');
  fillIn('textarea#developer-about', '');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form button[type="submit"]:disabled').length, 1);
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
    assert.equal(find('.ember-modal-dialog .about-field .help-block').text().trim(), "can't be blank!");
  });
  helpers.fillAllFields();
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form button[type="submit"]:disabled').length, 0);
    assert.equal(find('.ember-modal-dialog .help-block').length, 0);
  });
});

test('after saving the form the counter should be increased', function(assert) {
  server.createList('developer', 5);
  visit('/developers/new');
  andThen(function() {
    assert.equal(find('.developers-count').text().trim(), 5);
  });
  helpers.fillAllFields();
  click('.new-developer-form button[type="submit"]');
  andThen(function() {
    assert.equal(find('.developers-count').text().trim(), 6);
  });
});

test('after saving the form the developer should be appended to the list', function(assert) {
  server.createList('developer', 5);
  visit('/developers/new');
  andThen(function() {
    assert.equal(find('table tbody tr').length, 5);
  });
  helpers.fillAllFields();
  click('.new-developer-form button[type="submit"]');
  andThen(function() {
    assert.equal(find('table tbody tr').length, 6);
    assert.equal(find('table tbody tr:last td:first').text().trim(), 'Test');
  });
});

test('form should be reset after closing the modal', function(assert) {
  visit('/developers/new');
  helpers.fillAllFields();
  click('.cancel-button');
  visit('/developers/new');
  andThen(function() {
    assert.equal(find('input#developer-snapchat-username').text().trim(), '');
    assert.equal(find('input#developer-full-name').text().trim(), '');
    assert.equal(find('textarea#developer-about').text().trim(), '');
  });
});

