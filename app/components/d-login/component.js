import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form'],
  tagName: 'section',

  actions: {
    login() {
      this.sendAction('login', this.get('username'), this.get('password'));
    }
  }
});
