import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Component.extend(InfinityRoute, {
  store: Ember.inject.service(),
  newlyCreatedDeveloperService: Ember.inject.service('newly-created-developer'),
  newlyCreatedDeveloper: Ember.computed.readOnly('newlyCreatedDeveloperService.developer'),
  classNames: ['developers-page'],
  developersCount: Ember.inject.service(),
  developers: [],
  didReceiveAttrs() {
    this._loadDevelopers();
    this._activateObservers();
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
  },
  _activateObservers() {
    this.get('newlyCreatedDeveloper');
  },
  _onDeveloperCreated: Ember.observer('newlyCreatedDeveloper', function() {
    if(this.get('newlyCreatedDeveloper') === null) {
      return;
    }
    if(!this.get('allDevelopersAreLoaded')) {
      this._showMessage('Scroll down the page to see yourself on the list!');
      this._scrollToTheTopOfPage();
    } else {
      this.get('developers').pushObject(this.get('newlyCreatedDeveloper._internalModel'));
      this._scrollToTheBottomOfPage();
    }
  }),
  _showMessage(message) {
    this.set('notification', message);
  },
  _scrollToTheBottomOfPage() {
    this._scrollTo(Ember.$("body").height());
  },
  _scrollToTheTopOfPage() {
    this._scrollTo(0);
  },
  _scrollTo(offset) {
    Ember.$('html, body').animate({scrollTop: offset}, 1000);
  }
});
