var app = app || {};

app.FooterView = Backbone.View.extend({
  el: '.footer',
  events: {
    'click .home-nav'     : 'indexRouter'
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
  indexRouter: function () {
    $("body").animate({ scrollTop: ($('#index').offset().top) - 100 }, 3000);
    app.router.navigate("", {trigger: true, replace: true});
  }
});

