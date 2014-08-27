var app = app || {};

app.NavView = Backbone.View.extend({
  el: '#nav',
  events: {
    'click .projects' : 'projectsRouter',
    'click .about'    : 'aboutRouter',
    'click .contact'  : 'contactRouter',
    'click .home'     : 'indexRouter'
  },
  initialize: function() {
    this.render();
    console.log("nav to page");

  },
  render: function () {
    this.$el.html('');
    var nav = Handlebars.compile(app.templates.navTemplate);
    var view = this;
    view.$el.append( nav );
  },
  projectsRouter: function () {
    app.router.navigate("projects", {trigger: true, replace: true});
  },
  aboutRouter: function () {
    app.router.navigate("about", {trigger: true, replace: true});
  },
  contactRouter: function () {
    app.router.navigate("contact", {trigger: true, replace: true});
  },
  indexRouter: function () {
    app.router.navigate("", {trigger: true, replace: true});
  }
});

