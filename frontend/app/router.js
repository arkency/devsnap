import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('developers', { path: '/' }, function() {
    this.route('show', { path: '/developers/:developerId' });
    this.route('new', { path: '/developers/new' });
  });
  this.route('codes');
});

export default Router;
