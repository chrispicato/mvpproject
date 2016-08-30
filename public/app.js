module.exports.Chill = Backbone.View.extend({
  // template: Templates.layout,

  events: {
    'submit': 'submitToServer'
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  submitToServer: function () {
    console.log('submitted');
    e.preventDefault();
    var $username = this.$el.find('form .username');
    var $message = this.$el.find('form .message');
    var $User = new Chill.User({
      username: $username,
      message: $message
    });
    $message.val('');
  }

});