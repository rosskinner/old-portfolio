var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    var navView = new app.NavView();
    navView.render();
    var footerView = new app.FooterView();
    footerView.render();
    var indexView = new app.IndexView();
    console.log("index route");
    indexView.render();
    var projectsView = new app.ProjectsView();
    console.log("projects route");
    projectsView.render();
    var aboutView = new app.AboutView();
    console.log("about route");
    aboutView.render();
    var contactView = new app.ContactView();
    console.log("contact route");
    contactView.render();
   }
});
