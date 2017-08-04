import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('locations', function() {
    this.route('new', {path: '/new' });
    this.route('edit', {path: '/:id'});
  });

  this.route('events', function() {
    this.route('new', {path: '/new' });
    this.route('edit', {path: '/:id'});
  });

  this.route('videos', function() {
    this.route('new', {path: '/new' });
    this.route('edit', {path: '/:id'});
  });

  this.route('tags');

  this.route('whitelist');
  this.route('kiosks');

  this.route('register');
  this.route('login');
});

export default Router;
