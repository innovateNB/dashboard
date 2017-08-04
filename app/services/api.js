import Ember from 'ember';

export default Ember.Service.extend({
  url: 'http://api.innovatenb.org',

  session: null,

  init() {
    this.watch_token();
    this._super();
  },

  /* Returns a promise for consistency */
  authenticated: function() {
    if (!this.get('session_token')) {
      return Promise.reject("No Session Token");
    }
    
    return this.request('session');
  },

  session_token: Ember.computed({
    get() {
      return localStorage['X-Session'];
    },
    set(key, value) {
      if (value) {
        localStorage['X-Session'] = value;
      } else {
        localStorage.removeItem('X-Session');
      }
    }
  }),

  watch_token: function () {
    if (!this.get('session_token')) {
      return this.set('session', null);
    }

    var self = this;

    this.request('session').then(result => {
      self.set('session', result);
    }).catch(error=> {
      console.log(error);
      /* TODO: Also handle error */
      /* TODO: Toast */
      self.set('session', null);
      self.set('session_token', null);
    });
  }.observes('session_token'),

  logout() {
    this.set('session_token', null);
  },

  authenticate(username, password) {
    var self = this;
    return this.post('sessions', {
      data: { username: username, password: password }
    }).then(result=> {
      self.set('session_token', result.session);
      self.notifyPropertyChange('session_token');
    });
  },

  post: function(path, params) {
    var p = params;
    p.method = "POST";
    return this.request(path, p);
  },

  request: function(path, params) {
    var p = params || {};

    p.url = p.url || `${this.url}/${path}`;
    p.method = p.method || "GET";
    p.headers = p.headers || {};
    p.headers['X-Session'] =  this.get('session_token');
    p.headers['Content-Type'] = 'application/json';

    if (typeof p.data === "object") {
      p.data = JSON.stringify(p.data);
    }

    return Ember.$.ajax(p);
  }
});