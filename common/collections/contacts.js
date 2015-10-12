var schema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String
  }
});

Contacts = new Meteor.Collection('contacts');
Contacts.attachSchema(schema);

var allowAll = function () {
  return true;
};
Contacts.allow({
  insert: allowAll,
  update: allowAll,
  remove: allowAll
});
