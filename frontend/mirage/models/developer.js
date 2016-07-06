import { Model } from 'ember-cli-mirage';

export default Model.extend({
  model() {
    return this.store.findRecord('developer');
  }
});
