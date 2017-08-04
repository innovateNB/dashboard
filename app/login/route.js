import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(username, password) {
      var self = this;
      this.get('api').authenticate(username, password).then(function() {
        self.transitionTo('index');
      }).catch(error=>{
        console.log(error);
      });
    }
  }
});