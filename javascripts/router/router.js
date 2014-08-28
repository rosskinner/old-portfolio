var app = app || {};

app.Router = Backbone.Router.extend({
  // routes: {
  //   ''         : 'getindex',
  //   'projects' : 'getprojects',
  //   'about'    : 'getabout',
  //   'contact'  : 'getcontact'
  // },
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
  // getindex: function() {
  //   var indexView = new app.IndexView();
  //   console.log("index route");
  //   indexView.render();
  // },
  // getprojects: function() {
  //   var projectsView = new app.ProjectsView();
  //   console.log("projects route");
  //   projectsView.render();
  // },
  // getabout: function() {
  //   var aboutView = new app.AboutView();
  //   console.log("about route");
  //   aboutView.render();
  // },
  //  getcontact: function() {
  //   var contactView = new app.ContactView();
  //   console.log("contact route");
  //   contactView.render();
  // }

});
