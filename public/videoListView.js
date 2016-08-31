var app = app || {};

app.VideoListView = Backbone.View.extend({
  el: '#videos',

  events: {
    'click #search': 'addVideo'
  },

  addVideo: function (e) {
    e.preventDefault();

    var formData = {};

    $('#addVideo div').children('input').each(function (i, element) {
      if ($(element).val() !== '' ) {
        formData[element.id] = $(element).val();
      }
    });

    this.collection.add(new app.Search(formData));
  },

  initialize: function (initialVideos) {
    this.collection = new app.Searches(initialVideos);
    this.render();

    this.listenTo(this.collection, 'add', this.renderVideo);
  },

  render: function () {
    this.collection.each(function (item) {
      this.renderVideo(item);
    }, this);
  },

  renderVideo: function (item) {
    var videoView = new app.VideoView({
      model: item
    });
    this.$el.append(videoView.render().el);
  }
});