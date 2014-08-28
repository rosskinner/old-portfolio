var app = app || {};
$(document).ready(function (){

  app.templates = {
    navTemplate: $('#nav-template').html(),
    indexTemplate: $('#index-template').html(),
    projectsTemplate: $('#projects-template').html(),
    aboutTemplate: $('#about-template').html(),
    contactTemplate: $('#contact-template').html(),
    footerTemplate: $('#footer-template').html()
  }
  app.router = new app.Router();
  Backbone.history.start();
  console.log("main.js ready")
});
