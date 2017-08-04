import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['video', 'card'],

  actions: {
    save() {
      var model = this.get('model');
      var self = this;

      model.posted_by_id = model.location.id;
      
      delete model.location;
      delete model.tags;

      for (var i in model.info) {
        if (model.info[i] === null) {
          delete model.info[i];
        }
      }

      this.get('api').post((model.id)?`videos/${model.id}`:`videos`, {
        data: JSON.stringify(model),
      }).then(function() {
        self.get('router').transitionTo('videos');
      });
    },

    delete() {
      var model = this.get('model');
      var self = this;
      
      this.get('api').request(`videos/${this.get('model.id')}`, {
        method: "DELETE",
        data: JSON.stringify(model)
      }).then(function() {
        self.get('router').transitionTo('videos');
      });
    }
  }
});
