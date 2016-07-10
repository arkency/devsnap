import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['new-developer-form'],
  form: {},
  errors: {},
  didReceiveAttrs() {
    this._setInitialState();
  },
  formValid: Ember.computed(
    'form.{snapchatUsername,fullname,about}',
    'errors.{snapchatUsername,fullname,about}',
    '_eachFieldIsTouched',
    function() {
      if(!this.get('_eachFieldIsTouched')) {
        return false;
      }
      return this._noErrors();
  }),
  formInvalid: Ember.computed.not('formValid'),
  _setInitialState() {
    this._resetErrors();
    this._resetForm();
  },
  _resetErrors() {
    this._fieldNames().forEach((fieldName) => {
      this.set(`errors.${fieldName}`, null);
    });
  },
  _noErrors() {
    return this._errorValuesArray().compact().length === 0;
  },
  _fieldNames() {
    return [
      'snapchatUsername',
      'fullname',
      'about'
    ];
  },
  _formValidator: Ember.observer('form.{snapchatUsername,fullname,about}', function() {
    this._resetErrors();
    this._validatePresenceOfEachField();
  }),
  _validatePresenceOfEachField() {
    this._fieldNames().forEach((fieldName) => {
      this._validatePresenceOf(fieldName);
    });
  },
  _validatePresenceOf(fieldName) {
    if(this.get(`form.${fieldName}.length`) === 0) {
      this.set(`errors.${fieldName}`, "can't be blank!");
    }
  },
  _eachFieldIsTouched: Ember.computed('form.{snapchatUsername,fullname,about}', function() {
    return this._fieldValuesArray().find((v) => { return v === null; }) === undefined;
  }),
  _resetForm() {
    this._fieldNames().forEach((fieldName) => {
      this.set(`form.${fieldName}`, null);
    });
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
  }
});
