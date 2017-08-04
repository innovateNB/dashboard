import Ember from 'ember';

export function isoToLang(params/*, hash*/) {
  var t = {
    'en': "English",
    'fr': "French",
    'es': "Spanish"
  };
  return t[params];
}

export default Ember.Helper.helper(isoToLang);
