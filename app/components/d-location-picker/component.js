import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['location-picker'],

  timeout: null,
  editing: false,

  init() {

    if (this.get('location')) {
      this.set('input', this.get('location').info.en.name);
    }

    this._super();
  },

  watch_input: function() {
    var self = this;

    if (this.get('timeout')) {
      clearTimeout(this.get('timeout'));
    }
    
    if (this.get('input').trim() === "" || this.get('not_editing')) {
      return this.set('results', []);
    }

    var x = setTimeout(function() {
      Ember.$.getJSON(`${self.get('api.url')}/locations?q=${self.get('input')}`).then(function(data) {
        self.set('results', data);
      });
    }, 500);

    this.set('timeout', x);

  }.observes('input', 'editing'),

  watch_location: function() {
    this.set('input', this.get('location').info.en.name);
    this.set('editing', false);
  }.observes('location'),

  not_editing: function(){
    return !this.get('editing');
  }.property('editing'),

  actions: {
    select(result) {
      this.set('location', result);
    },

    edit() {
      this.set('editing', true);
    }
  }
});