import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Component.extend(InfinityRoute, {
  store: Ember.inject.service(),
  developers: [],
  didReceiveAttrs() {
    this._loadDevelopers();
  },
  _loadDevelopers() {
    this.set('firstBatchOfDevelopersIsLoaded', false);
    this.infinityModel('developer', { perPage: 20, modelPath: 'developers' }).then((developers) => {
      this.set('developers', developers);
      this.set('firstBatchOfDevelopersIsLoaded', true);
    });
  },
  infinityModelLoaded() {
    this.set('allDevelopersAreLoaded', true);
  }
});
