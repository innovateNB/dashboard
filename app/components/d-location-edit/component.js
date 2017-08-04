import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['location', 'card'],

  actions: {
    save() {
      var model = this.get('model');
      var self = this;

      delete model.tags;
      delete model.events;
      
      for (var i in model.info) {
        if (model.info[i] == null) {
          delete model.info[i];
        }
      }

      this.get('api').post((model.id)?`locations/${model.id}`:`locations`, {
        data: JSON.stringify(model)
      })
      .then(function() {
        self.get('router').transitionTo('locations');
      });
    },

    delete() {
      var model = this.get('model');
      var self = this;
      
      this.get('api').request(`locations/${this.get('model.id')}`, {
        type: "DELETE",
        data: JSON.stringify(model)
      }).then(function() {
        self.get('router').transitionTo('locations');
      });
    }
  }
});
