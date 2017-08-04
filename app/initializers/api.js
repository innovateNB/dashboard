export default {
  name: 'i18n',
  initialize: function(app) {
    app.inject('component', 'api', 'service:api');
    app.inject('route', 'api', 'service:api');
    app.inject('view', 'api', 'service:api');
    app.inject('controller', 'api', 'service:api');

    app.inject('component', 'router', 'router:main');
  }
};