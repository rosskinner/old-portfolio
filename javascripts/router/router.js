var app = app || {};

app.Router = Backbone.Router.extend({
  initialize: function() {
    // NAV VIEW //
    var navView = new app.NavView();
    navView.render();

    // FOOTER VIEW //
    var footerView = new app.FooterView();
    footerView.render();

    // INDEX VIEW //
    var indexView = new app.IndexView();
    indexView.render();

    // PROJECTS VIEW //
    var projectsView = new app.ProjectsView();
    projectsView.render();

    // ABOUT VIEW //
    var aboutView = new app.AboutView();
    aboutView.render();

    // CONTACT VIEW //
    var contactView = new app.ContactView();
    contactView.render();
   }
});
