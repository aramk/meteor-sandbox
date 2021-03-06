var sizeSchema = new SimpleSchema({
  height: {
    type: Number,
    decimal: true
  },
  width: {
    type: Number,
    decimal: true
  },
  depth: {
    type: Number,
    decimal: true,
    optional: true
  }
});

var schema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String
  },
  type: {
    label: 'Type',
    type: String,
    allowedValues: ['Fruit', 'Vegetable']
  },
  size: {
    type: sizeSchema,
    optional: true
  },
  // azimuth: {
  //   label: 'Azimuth Array',
  //   type: String
  // },
  // size: {
  //   label: 'Size',
  //   type: Object,
  //   // autoValue: function() {
  //   //   if (!this.isSet || this.value === '') {
  //   //     return {};
  //   //   }
  //   // }
  // },
  // 'size.width': {
  //   label: 'Width',
  //   type: Number
  // },
  // 'size.height': {
  //   label: 'Height',
  //   type: Number
  // },
  // 'size.depth': {
  //   label: 'Depth',
  //   type: Number,
  //   optional: true
  // },
  // 'size.deeper': {
  //   label: 'Deeper',
  //   type: Object
  // },
  // 'size.deeper.height': {
  //   label: 'Height 2',
  //   type: Number
  // },
  // 'size.deeper.depth': {
  //   label: 'Depth 2',
  //   type: Number,
  //   optional: true
  // },
  // color: {
  //   label: 'Color',
  //   type: String,
  //   optional: true
  // },
  isBright: {
    type: Boolean,
    defaultValue: true
  }
});

Products = new Meteor.Collection('products');
Products.attachSchema(schema);

var allowAll = function () {
  return true;
};
Products.allow({
  insert: allowAll,
  update: allowAll,
  remove: allowAll
});
