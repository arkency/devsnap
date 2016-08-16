import { test } from 'qunit';
import moduleForAcceptance from 'devsnap/tests/helpers/module-for-acceptance';
import PageObject from 'devsnap/tests/page-object';

const {
  visitable,
  fillable,
  clickable,
  text
} = PageObject;

const page = PageObject.create({
  visit: visitable('/developers/new'),

  fillInSnapchatUsername:      fillable('#developer-snapchat-username'),
  fillInFullName:              fillable('#developer-full-name'),
  fillInAbout:                 fillable('#developer-about'),

  snapchatUsername:            text('#developer-snapchat-username'),
  fullName:                    text('#developer-full-name'),
  about:                       text('#developer-about'),
  lastSnapchatUsernameInTable: text('table tbody tr:last td:first'),
  developersCounter:           text('.developers-count'),

  clickCancelButton:           clickable('.cancel-button'),
  clickSubmitButton:           clickable('.new-developer-form button[type="submit"]'),

  fillInAllFields() {
    return this.fillInSnapchatUsername('Test')
      .fillInFullName('Test')
      .fillInAbout('Test');
  },
  disabledSubmitButton() {
    return find('.ember-modal-dialog form button[type="submit"]:disabled');
  },
  tableRows() {
    return find('table tbody tr');
  },
  formTag() {
    return find('.ember-modal-dialog form');
  }
});

moduleForAcceptance('Acceptance | developers/new page');

const assertions = {
  submitButtonShouldBeDisabled(assert) {
    assert.equal(page.disabledSubmitButton().length, 1);
  },
  submitButtonShouldNotBeDisabled(assert) {
    assert.equal(page.disabledSubmitButton().length, 0);
  },
  thereShouldBeOnlyOneError(assert) {
    assert.equal(find('.ember-modal-dialog .help-block').length, 1);
  },
  fieldShouldHavePresenceError(assert, className) {
    assert.equal(find(`.ember-modal-dialog ${className} .help-block`).text().trim(), "can't be blank!");
  },
  thereShouldBeNoErrors(assert) {
    assert.equal(find('.ember-modal-dialog .help-block').length, 0);
  }
};

test('visiting /developers/new', function(assert) {
  page.visit();
  andThen(function() {
    assert.equal(currentURL(), '/developers/new');
    assert.equal(page.formTag().length, 1);
  });
});

test('the submit button should be disabled when form is not touched', function(assert) {
  page.visit();
  andThen(function() {
    assertions.submitButtonShouldBeDisabled(assert);
  });
});

test('should close modal after clicking on cancel button', function(assert) {
  page.visit();
  andThen(function() {
    assert.equal(currentURL(), '/developers/new');
  });
  page.clickCancelButton();
  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(page.formTag().length, 0);
  });
});

test('the submit button should be enabled when all fields are filled', function(assert) {
  page
    .visit()
    .fillInAllFields();
  andThen(function() {
    assertions.submitButtonShouldNotBeDisabled(assert);
  });
});

test('an error should be displayed when any field is blank', function(assert) {
  page
    .visit()
    .fillInAllFields()
    .fillInSnapchatUsername('');
  andThen(function() {
    assertions.submitButtonShouldBeDisabled(assert);
    assertions.thereShouldBeOnlyOneError(assert);
    assertions.fieldShouldHavePresenceError(assert, '.snapchat-username-field');
  });
  page
    .fillInAllFields()
    .fillInFullName('');
  andThen(function() {
    assertions.submitButtonShouldBeDisabled(assert);
    assertions.thereShouldBeOnlyOneError(assert);
    assertions.fieldShouldHavePresenceError(assert, '.fullname-field');
  });
  page
    .fillInAllFields()
    .fillInAbout('');
  andThen(function() {
    assertions.submitButtonShouldBeDisabled(assert);
    assertions.thereShouldBeOnlyOneError(assert);
    assertions.fieldShouldHavePresenceError(assert, '.about-field ');
  });
  page.fillInAllFields();
  andThen(function() {
    assertions.submitButtonShouldNotBeDisabled(assert);
    assertions.thereShouldBeNoErrors(assert);
  });
});

test('after saving the form the counter should be increased', function(assert) {
  server.createList('developer', 5);
  page.visit();
  andThen(function() {
    assert.equal(page.developersCounter(), 5);
  });
  page
    .fillInAllFields()
    .clickSubmitButton();
  andThen(function() {
    assert.equal(page.developersCounter(), 6);
  });
});

test('after saving the form the developer should be appended to the list', function(assert) {
  server.createList('developer', 5);
  page.visit();
  andThen(function() {
    assert.equal(page.tableRows().length, 5);
  });
  page
    .fillInAllFields()
    .clickSubmitButton();
  andThen(function() {
    assert.equal(page.tableRows().length, 6);
    assert.equal(page.lastSnapchatUsernameInTable(), 'Test');
  });
});

test('form should be reset after closing the modal', function(assert) {
  page
    .visit()
    .fillInAllFields()
    .clickCancelButton()
    .visit();
  andThen(function() {
    assert.equal(page.snapchatUsername(), '');
    assert.equal(page.fullName(), '');
    assert.equal(page.about(), '');
  });
});

