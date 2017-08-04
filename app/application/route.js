import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	  return [
  		{ route: 'index', icon: 'home' },
  		{ route: 'locations', icon: 'map' },
  		{ route: 'events', icon: 'calendar' },
      { route: 'tags', icon: 'tags' },
      { route: 'videos', icon: 'youtube-play' },
      { route: 'whitelist', icon: 'list' },
      { route: 'kiosks', icon: 'tablet' },
	  ];
	}
});
