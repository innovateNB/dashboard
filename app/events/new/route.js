import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      info: {
        en: {
          title: "New Event",
          description: "Description goes here"
        }
      }
    };
  }
});
