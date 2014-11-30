var schema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String
  }
});

Colors = new Meteor.Collection('colors');
Colors.attachSchema(schema);

var allowAll = function () {
  return true;
};
Colors.allow({
  insert: allowAll,
  update: allowAll,
  remove: allowAll
});
