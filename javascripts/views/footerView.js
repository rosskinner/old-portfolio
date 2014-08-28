var app = app || {};

app.FooterView = Backbone.View.extend({
  el: '.footer',
  events: {
    'click .projects' : 'projectsRouter',
    'click .about'    : 'aboutRouter',
    'click .contact'  : 'contactRouter',
    'click .home'     : 'indexRouter'
  },
  initialize: function() {
    this.render();
    console.log("footer to page");

  },
  render: function () {
    this.$el.html('');
    var footer = Handlebars.compile(app.templates.footerTemplate);
    var view = this;
    view.$el.append( footer );
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

