import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Component.extend(InfinityRoute, {
  store: Ember.inject.service(),
  developersCount: Ember.inject.service(),
  developers: [],
  didReceiveAttrs() {
    this._loadDevelopers();
  },
  infinityModelLoaded() {
    this.set('allDevelopersAreLoaded', true);
  },
  _loadDevelopers() {
    this.set('firstBatchOfDevelopersIsLoaded', false);
    this.infinityModel('developer', { perPage: 20, modelPath: 'developers' }).then((result) => {
      this.set('developers', result);
      this.set('firstBatchOfDevelopersIsLoaded', true);
      this.get('developersCount').setCount(result.get('meta').total_count);
    });
  }
});
