var app = app || {};

app.SearchView = Backbone.View.extend({
  el: '#search',

  events: {
    'click #search': 'addSearch'
  },

  addSearch: function () {
    console.log('got here');
  },
});