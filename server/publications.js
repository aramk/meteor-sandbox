Meteor.publish('products', function() {
  return Products.find();
});

Meteor.publish('colors', function() {
  return Colors.find();
});

Meteor.publish('contacts', function() {
  return Contacts.find();
});

// Meteor.publish('userData', function () {
//   return Meteor.users.find({}, {fields: {profile: 1, emails: 1, roles: 1, username: 1}});
// });
