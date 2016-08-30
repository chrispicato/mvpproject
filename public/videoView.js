var app = app || {};

app.VideoView = Backbone.View.extend({
  el: '#video',

  events: {

  },

  template: _.template($('#videoTemplate').html()),

  render: function () {
    this.$el.html(this.template(app.Searches[app.Searches.length - 1]));
    return this;
  },

  initialize: function () {
    this.collection = new app.Searches();
    this.render();

    this.listenTo(this.collection, '')
  },
});