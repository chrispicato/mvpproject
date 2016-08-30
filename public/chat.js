var app = app || {};

app.Chat = Backbone.Collection.extend({
  model: app.User
});