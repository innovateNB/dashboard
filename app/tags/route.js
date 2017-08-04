import Ember from 'ember';
import Authenticated from 'dashboard/mixins/authenticated';

export default Ember.Route.extend(Authenticated, {
  model() {
    return Ember.$.getJSON(`${this.get('api.url')}/tags`);
  }
});
