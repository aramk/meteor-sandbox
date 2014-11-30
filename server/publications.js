Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('colors', function() {
  return Colors.find();
});

Meteor.publish('contacts', function() {
  return Contacts.find();
});
