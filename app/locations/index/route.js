import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON(`${this.get('api.url')}/locations`);
  }
});
