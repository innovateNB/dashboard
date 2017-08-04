import Ember from 'ember';
import Authenticated from 'dashboard/mixins/authenticated';

export default Ember.Route.extend(Authenticated, {
  model() {
    return Ember.$.getJSON(`${this.get('api.url')}/kiosk_manifest/kiosk-nboi-.*`);
  },
  actions: {
    reorderItems(items, dragged) {
      console.log(dragged);
      console.log();

      Ember.set(this.currentModel, 'tiles', items);
      
      this.get('api').post(`kiosk_manifest/kiosk-nboi-.*`, {
        data: JSON.stringify(this.currentModel)
      })
      .then(function() {
        self.get('router').transitionTo('locations');
      });
    }
  }
});
