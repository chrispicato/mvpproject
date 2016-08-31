var app = app || {};

app.VideoView = Backbone.View.extend({
  tagName: 'div',
  className: 'videoContainer',
  template: _.template($('#videoTemplate').html()),

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});