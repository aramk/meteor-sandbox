var schema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String
  }
});

Products = new Meteor.Collection('products', {
  schema: schema
});
Products.schema = schema;

var allowAll = function () {
  return true;
};
Products.allow({
  insert: allowAll,
  update: allowAll,
  remove: allowAll
});
