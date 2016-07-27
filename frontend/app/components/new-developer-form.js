import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  developersCount: Ember.inject.service(),
  newlyCreatedDeveloper: Ember.inject.service(),
  classNames: ['new-developer-form'],
  form: {},
  errors: {},
  touchedFields: {},
  didReceiveAttrs() {
    this._setInitialState();
  },
  formValid: Ember.computed(
    'form.{snapchatUsername,fullName,about}',
    'errors.{snapchatUsername,fullName,about}',
    '_eachFieldIsTouched',
    function() {
      if(!this.get('_eachFieldIsTouched')) {
        return false;
      }
      return this._noErrors();
  }),
  formInvalid: Ember.computed.not('formValid'),
  actions: {
    clickedCancelButton() {
      this.attrs.onClickCancelButton();
    },
    submitForm() {
      this._validateForm();
      if(this.get('formInvalid')) {
        return;
      }
      this.set('submitting', true);
      this.attrs.onSubmit();
      const params = Ember.merge(this.get('form'), { id: this.get('form.snapchatUsername') });
      this.get('store').createRecord('developer', params).save().then((developer) => {
        this.set('submitting', false);
        this.get('developersCount').increment();
        this.get('newlyCreatedDeveloper').setDeveloper(developer);
        this.attrs.onSave(developer);
      }, (response) => {
        this._handleErrorsFromApi(response.errors);
        this.set('submitting', false);
      });
    },
    handleFieldValueUpdated(fieldName, value) {
      this.set(`form.${fieldName}`, value);
      this._markFieldAsTouched(fieldName);
    }
  },
  _setInitialState() {
    this._resetErrors();
    this._resetForm();
    this.set('submitting', false);
  },
  _resetErrors() {
    this._fieldNames().forEach((fieldName) => {
      this.set(`errors.${fieldName}`, null);
    });
    this.set('apiErrors', []);
  },
  _noErrors() {
    return this._errorValuesArray().compact().length === 0;
  },
  _fieldNames() {
    return [
      'snapchatUsername',
      'fullName',
      'about'
    ];
  },
  _formValidator: Ember.observer('form.{snapchatUsername,fullName,about}', function() {
    this._validateForm();
  }),
  _validateForm() {
    this._resetErrors();
    this._validatePresenceOfEachField();
    this._validateUniquenessOfSnapchatUsername();
  },
  _validatePresenceOfEachField() {
    this._fieldNames().forEach((fieldName) => {
      this._validatePresenceOf(fieldName);
    });
  },
  _validateUniquenessOfSnapchatUsername() {
    if(!this.get('form.snapchatUsername.length')) {
      return;
    }
    if(this.get('store').peekRecord('developer', this.get('form.snapchatUsername'))) {
      this._setFieldError('snapchatUsername', 'This snapchat username is already on the list.');
    } else {
      this._setFieldError('snapchatUsername', null);
    }
  },
  _validatePresenceOf(fieldName) {
    if(this.get(`form.${fieldName}.length`) === 0) {
      this._setFieldError(fieldName, "can't be blank!");
    }
  },
  _eachFieldIsTouched: Ember.computed('form.{snapchatUsername,fullName,about}', function() {
    return this._fieldNames().find((fieldName) => {
      return !this._isFieldTouched(fieldName);
    }) === undefined;
  }),
  _isFieldTouched(fieldName) {
    return this.get(`touchedFields.${fieldName}`);
  },
  _resetForm() {
    this._fieldNames().forEach((fieldName) => {
      this.set(`form.${fieldName}`, null);
    });
  },
  _setFieldError(fieldName, message) {
    if(this._isFieldTouched(fieldName)) {
      this.set(`errors.${fieldName}`, message);
    }
  },
  _fieldValuesArray() {
    return this._fieldNames().map((fieldName) => {
      return this.get(`form.${fieldName}`);
    });
  },
  _errorValuesArray() {
    return this._fieldNames().map((fieldName) => {
      return this.get(`errors.${fieldName}`);
    });
  },
  _fieldExists(name) {
    return this._fieldNames().find(function(fieldName) {
      return fieldName === name;
    });
  },
  _handleErrorsFromApi(errors) {
    let other_errors = [];
    errors.forEach((error) => {
      if(this._fieldExists(error.id.camelize())) {
        this.set(`errors.${error.id.camelize()}`, error.title);
      } else {
        other_errors.pushObject(error);
      }
    });
    this.set('apiErrors', other_errors);
  },
  _markFieldAsTouched(fieldName) {
    this.set(`touchedFields.${fieldName}`, true);
  }
});
