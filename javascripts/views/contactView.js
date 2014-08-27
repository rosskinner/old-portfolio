var app = app || {};

app.ContactView = Backbone.View.extend({
  el: '.main',
  initialize: function() {
    this.render();
    console.log("contact to page");

  },
  render: function () {
    this.$el.html('');
    var contact = Handlebars.compile(app.templates.contactTemplate);
    var view = this;
    view.$el.append( contact );
  }
});

