import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | developers/new page');

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
    assert.equal(find('.ember-modal-dialog form input[type="submit"]:disabled').length, 1);
  });
});

test('the submit button should be enabled when all fields are filled', function(assert) {
  visit('/developers/new');
  fillIn('input#developer-snapchat-username', 'Test');
  fillIn('input#developer-full-name', 'Test');
  fillIn('textarea#developer-about', 'Test');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form input[type="submit"]:disabled').length, 0);
  });
});

test('an error should be displayed when any field is blank', function(assert) {
  visit('/developers/new');
  fillIn('input#developer-snapchat-username', '');
  fillIn('input#developer-full-name', 'Test');
  fillIn('textarea#developer-about', 'Test');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form input[type="submit"]:disabled').length, 1);
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
    assert.equal(find('.ember-modal-dialog .snapchat-username-field .help-block').text().trim(), "can't be blank!");
  });

  fillIn('input#developer-snapchat-username', 'Test');
  fillIn('input#developer-full-name', '');
  fillIn('textarea#developer-about', 'Test');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form input[type="submit"]:disabled').length, 1);
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
    assert.equal(find('.ember-modal-dialog .fullname-field .help-block').text().trim(), "can't be blank!");
  });

  fillIn('input#developer-snapchat-username', 'Test');
  fillIn('input#developer-full-name', 'Test');
  fillIn('textarea#developer-about', '');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form input[type="submit"]:disabled').length, 1);
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
    assert.equal(find('.ember-modal-dialog .about-field .help-block').text().trim(), "can't be blank!");
  });

  fillIn('input#developer-snapchat-username', 'Test');
  fillIn('input#developer-full-name', 'Test');
  fillIn('textarea#developer-about', 'Test');
  andThen(function() {
    assert.equal(find('.ember-modal-dialog form input[type="submit"]:disabled').length, 0);
    assert.equal(find('.ember-modal-dialog .help-block').length, 0);
  });
});
