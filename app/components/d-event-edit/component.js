import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['event', 'card'],

  actions: {
    save() {
      var model = this.get('model');
      var self = this;
      
      model.location_id = model.location.id; 

      delete model.location;
      delete model.tags;

      for (var i in model.info) {
        if (model.info[i] === null) {
          delete model.info[i];
        }
      }

      this.get('api').post((model.id)?`events/${model.id}`:`events`, {
        data: JSON.stringify(model),
      }).then(function() {
        self.get('router').transitionTo('events');
      });
    },

    delete() {
      var model = this.get('model');
      var self = this;
      
      this.get('api').request(`events/${this.get('model.id')}`, {
        method: "DELETE",
        data: JSON.stringify(model)
      })
      .then(function() {
        self.get('router').transitionTo('events');
      });
    }
  }
});
