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

/////// ANIMATE NAVIGATION DROP DOWN ////////
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (($(document).scrollTop()) > 150) {
      $('#nav').addClass('nav-animate');
      $('.main').css({'margin-top': '107px'});
    } else {
      $('#nav').removeClass('nav-animate');
      $('.main').css({'margin-top': '0px'});
    }
  });
});
