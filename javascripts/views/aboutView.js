var app = app || {};

app.AboutView = Backbone.View.extend({
  el: '.main',
  initialize: function() {
    this.render();
    console.log("about to page");

  },
  render: function () {
    this.$el.html('');
    this.$el.attr('id', 'about');
    var about = Handlebars.compile(app.templates.aboutTemplate);
    var view = this;
    view.$el.append( about );
  }
});
