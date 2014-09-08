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

/////// FADE BACKGROUND IMAGE OUT ///////
// var background = $('<div/>', {
//     id: 'background',

// }).prependTo('.index');

$('#background').css({
  position: 'absolute',
  width: '100%',
  height: $(window).height(),
  'z-index': '2000',
  top: '0',
  'background-color': '#f02525',
  opacity: '1',
  'padding-top': '207px'
});

var h1 = $('#background').find('h1');
console.log(h1);
$(h1).css({
  // position: 'absolute',
  // top: ($(window).height())/2 - 69,
  // left: ($(window).height())/2 - 56,
  color: '#FFF'
});
$('#background').velocity({
  opacity: 0
  }, 5000,{
    easing: "easeInSine"
  });

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


