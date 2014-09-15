SimpleSchema.debug = true;
SimpleSchema.strict = true;

var schema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String
  },
//  cost: {
//    label: 'Cost',
//    type: Number
//  }
  price: {
    label: 'Price',
    type: Number
  }
});

Products = new Meteor.Collection('products', {
  schema: schema
});
Products.schema = schema;

var allowAll = function() {
  return true;
};
Products.allow({
  insert: allowAll,
  update: allowAll,
  remove: allowAll
});
