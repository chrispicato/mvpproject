var app = app || {};

app.ChatView = Backbone.View.extend({
  el: '#users',

  events: {
    'click #add': 'addUser'
  },

  addUser: function (e) {
    console.log('got here');
    e.preventDefault();

    var formData = {};

    $('#addUser div').children('input').each(function (index, element) {
      if ($(element).val() !== '') {
        formData[element.id] = $(element).val();
      }
    });

    this.collection.create(formData);
  },

  initialize: function () {
    this.collection = new app.Chat();
    this.collection.fetch({
      reset: true
    });
    this.render();

    this.listenTo(this.collection, 'add', this.renderUser);
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function () {
    this.collection.each(function (item) {
      this.renderUser(item);
    }, this);
  },

  renderUser: function (item) {
    var userView = new app.UserView({
      model: item
    });
    this.$el.append(userView.render().el);
  }
});