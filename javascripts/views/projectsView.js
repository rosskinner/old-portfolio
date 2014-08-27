var app = app || {};

app.ProjectsView = Backbone.View.extend({
  el: '.main',
  initialize: function() {
    this.render();
    console.log("projects to page");

  },
  render: function () {
    this.$el.html('');
    var projects = Handlebars.compile(app.templates.projectsTemplate);
    var view = this;
    view.$el.append( projects );
  }
});

