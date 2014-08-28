var app = app || {};

app.ProjectsView = Backbone.View.extend({
  el: '#projects',
  initialize: function() {
    this.render();
    console.log("projects to page");

  },
  render: function () {
    this.$el.html('');
    this.$el.attr('id', 'projects');
    var projects = Handlebars.compile(app.templates.projectsTemplate);
    var view = this;
    view.$el.append( projects );
  }
});

