var app = app || {};

app.ContactView = Backbone.View.extend({
  el: '#contact',
  initialize: function() {
    this.render();
    console.log("contact to page");

  },
  render: function () {
    this.$el.html('');
    this.$el.attr('id', 'contact');
    var contact = Handlebars.compile(app.templates.contactTemplate);
    var view = this;
    view.$el.append( contact );
  }
});

