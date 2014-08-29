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
  console.log("main.js ready");

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll)

    if (($(document).scrollTop()) > 150) {
      $('#nav').addClass('nav-animate');
      $('.main').css({'margin-top': '107px'});
      // $('.route').css({ 'margin-top': '-93px'});
    } else {
      $('#nav').removeClass('nav-animate');
      $('.main').css({'margin-top': '0px'});
    }
  });
});
