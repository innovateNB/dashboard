import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row'],

  actions: {
    expand() {
      this.get('route').transitionTo('location');
    }
  }
});
