import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('developers', { path: '/' }, function() {
    this.route('show', { path: '/developers/:developerId' });
  });
});

export default Router;
