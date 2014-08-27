var app = app || {};

app.IndexView = Backbone.View.extend({
  el: '.main',
  initialize: function() {
    this.render();
    console.log("rendering index");

  },
  render: function () {
    this.$el.html('');
    this.$el.attr('id', 'index');
    var index = Handlebars.compile(app.templates.indexTemplate);
    var view = this;
    view.$el.append( index );
  }
});

