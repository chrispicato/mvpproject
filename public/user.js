var app = app || {};

app.User = Backbone.Model.extend({
  defaults: {
    username: 'no username',
    message: 'no message'
  }
});