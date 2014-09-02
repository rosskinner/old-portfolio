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

//////  SET SECTION HEIGHT TO 100% OF WINDOW HEIGHT ////////
  $('#index').css({'min-height': $(window).height()});
  $('.projects').css({'min-height': $(window).height()});
  $('.about').css({'min-height': $(window).height()});
  $('.contact').css({'min-height': $(window).height()});

///////// IF BROWSER IS MOZILLA THEN DON'T DO CLIPPING MASK /////////

var FF = !(window.mozInnerScreenX == null);
  if (FF) {
    $('#index').css({
      'background-image':'none',
      background:'#FFF',
      color:'#f02525'
    });
  }
});
