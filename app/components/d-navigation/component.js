import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navigation'],

  actions: {
    logout() {
      this.get('api').logout();
      this.get('router').transitionTo('login');
    }
  }
});