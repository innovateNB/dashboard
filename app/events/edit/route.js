import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`${this.get('api.url')}/events/${params.id}`);
  }
});
