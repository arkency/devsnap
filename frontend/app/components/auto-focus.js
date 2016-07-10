import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  didInsertElement() {
    Ember.run.next(() => {
      const element = this.$().find(">:first");
      if(element !== undefined && !element.attr('disabled')) {
        element.focus();
      }
    });
  }
});
