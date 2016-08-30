var app = app || {};

$(function () {
  var users = [
  {username: 'Chris', message: 'Hello'},
  {username: 'Connor', message: 'I suck'},
  {username: 'Danny', message: 'Hola'},
  {username: 'Bryan', message: 'Konichiwa'},
  {username: 'Andrew', message: 'Suck it'},
  ];

  new app.ChatView(users);
});

// window.Chat = Backbone.View.extend({
//   template: Templates['chat'],

//   events: {
//     'submit': 'submitToServer'
//   },

//   render: function () {
//     this.$el.html(this.template());
//     return this;
//   },

//   submitToServer: function () {
//     $('#target').submit(function (e) {
//       console.log('got here');
//       e.preventDefault();
//       var username = e.currentTarget[0].value;
//       // var $username = $('#username').value;
//       console.log(username);
//       var message = e.currentTarget[1].value;
//       console.log(message);
//       // var $message = this.$el.find('form #message');
//       // var User = new User({
//       //   username: username,
//       //   message: message
//       // });
//       // console.log($username);
//       // console.log($message);
//       $message.val('');
//     });
//   }

// });