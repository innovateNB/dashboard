import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      info: {
        en: {
          name: "New Location",
          description: "Description goes here"
        }
      },

      address: {}
    };
  }
});
