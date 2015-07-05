var noop = function () {
};

var BaseController = RouteController.extend({
  onBeforeAction: function() {
    if (!this.ready()) {
      return;
    }
    // This redirects users to a sign in form.
    // AccountsEntry.signInRequired(this, noop);
    this.next();
  },
  // Don't render until we're ready (waitOn) resolved
  action: function() {
    this.ready() && this.render();
  },
  waitOn: function() {
    return Meteor.subscribe('userData');
  }
});

Router.map(function() {
  this.route('tables', {path: '/', controller: BaseController, template: 'tables'});
  // Products
  this.route('productForm', {
    path: '/products/create', controller: BaseController, template: 'productForm',
    waitOn: function() {
      return Meteor.subscribe('products');
    },
    data: function() {
      return {};
    }
  });
  this.route('productEdit', {
    path: '/products/:_id/edit', controller: BaseController, template: 'productForm',
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
