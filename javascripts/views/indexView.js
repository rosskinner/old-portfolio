var app = app || {};

app.IndexView = Backbone.View.extend({
  el: '.main',
  initialize: function() {
    this.render();
  },
  render: function () {
    this.$el.html('');
    this.$el.attr('id', 'index');
    var index = Handlebars.compile(app.templates.indexTemplate);
    var view = this;
    view.$el.append( index );
  }
});

