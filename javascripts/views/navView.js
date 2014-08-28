var app = app || {};

app.NavView = Backbone.View.extend({
  el: '#nav',
  events: {
    'click .projects-nav' : 'projectsRouter',
    'click .about-nav'    : 'aboutRouter',
    'click .contact-nav'  : 'contactRouter',
    'click .home-nav'     : 'indexRouter'
  },
  initialize: function() {
    this.render();
  },
  render: function () {
    this.$el.html('');
    var nav = Handlebars.compile(app.templates.navTemplate);
    var view = this;
    view.$el.append( nav );
  },
  projectsRouter: function () {
    $("body").animate({ scrollTop: $('.projects').offset().top }, 3000);
    app.router.navigate("projects", {trigger: true, replace: true});
  },
  aboutRouter: function () {
    $("body").animate({ scrollTop: $('.about').offset().top }, 3000);
    app.router.navigate("about", {trigger: true, replace: true});
  },
  contactRouter: function () {
    $("body").animate({ scrollTop: $('.contact').offset().top }, 4000);
    app.router.navigate("contact", {trigger: true, replace: true});
  },
  indexRouter: function () {
    $("body").animate({ scrollTop: $('#index').offset().top }, 4000);
    app.router.navigate("", {trigger: true, replace: true});
  }
});

// if ($('body').scrollTop() > 200) {
//   console.log('scroll');
//   $('#nav').css('position', 'fixed');
// }
;
