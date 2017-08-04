import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'f-col languages',

  language_to_add: null,
  
  languages_available: function() {
    var k = this.get('model');
    var l = [{ iso: 'en', language: 'English'}, {iso: 'es', language: 'Spanish'}];

    return l.filter(function(e) {
      return !k[e.iso] || k[e.iso == null];
    });
  }.property('translations'),

  translations: function() {
    var k = this.get('model');
    return Object.keys(k).filter(function(e) {
      return (k[e] && k[e]);
    }).map((e)=>({ model: k[e], iso: e}));
  }.property('model'),

  actions: {
    add_language() {
      var l = this.get('language_to_add');
      var m = this.get('model.' + l);

      if (!m) {
        this.set('model.' + l, this.i18n_model);
      }

      this.notifyPropertyChange('model');
    },

    delete_language(lang) {
      this.set('model.' + lang, null);
      this.notifyPropertyChange('model');
    }
  }
});
