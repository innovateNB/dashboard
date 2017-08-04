import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form'],
  tagName: 'section',

  actions: {
    register() {
      var self = this;
      this.set('error', '');

      this.get('api').post('users', {
        data: JSON.stringify({
          username: this.get('username'),
          password: this.get('password'),
          email: this.get('email')
        })
      }).then(()=> {
        self.get('router').transitionTo('login');
      }).catch(error=> {
        self.set('error', error.detail);
      });
    }
  }
});
