var BaseController = RouteController.extend({
  // Don't render until we're ready (waitOn) resolved
  action: function() {
    this.ready() && this.render();
  }
});

Router.map(function() {
  this.route('tables', {path: '/', controller: BaseController, template: 'tables'});
  // Products
  this.route('productItem', {
    path: '/products/create', controller: BaseController, template: 'productItem',
    waitOn: function() {
      return Meteor.subscribe('products');
    },
    data: function() {
      return {};
    }
  });
  this.route('productEdit', {
    path: '/products/:_id/edit', controller: BaseController, template: 'productItem',
    waitOn: function() {
      return Meteor.subscribe('products');
    },
    data: function() {
      return {doc: Products.findOne(this.params._id)};
    }
  });

  // Colors
  this.route('colorItem', {
    path: '/colors/create', controller: BaseController, template: 'colorItem',
    waitOn: function() {
      return Meteor.subscribe('colors');
    },
    data: function() {
      return {};
    }
  });
  this.route('colorEdit', {
    path: '/colors/:_id/edit', controller: BaseController, template: 'colorItem',
    waitOn: function() {
      return Meteor.subscribe('colors');
    },
    data: function() {
      return {doc: Colors.findOne(this.params._id)};
    }
  });
});
