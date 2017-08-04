import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      info: {
        en: {
          title: "New Video",
          embed_url: "https://youtube.com/embed/",
          description: "Description goes here"
        }
      }
    };
  }
});
