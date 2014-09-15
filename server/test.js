Meteor.startup(function() {

  var product = Products.findOne();
  Products.update(product._id, {$set: {test: 123}}, {validate: false});

});
