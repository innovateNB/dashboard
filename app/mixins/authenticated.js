import Ember from 'ember';

const { inject: { service }, Mixin } = Ember;

export default Mixin.create({
  api: service('api'),

  beforeModel() {
    var self = this;
    var args = arguments;
    
    this.get('api').authenticated().then(()=> {
      self._super(...args);
    }).catch(()=>{
      self.transitionTo('login');
    });
  }
});