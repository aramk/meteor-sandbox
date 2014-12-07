var formName = 'productItem',
    collection,
    collectionName,
    TemplateClass = Template[formName];

TemplateClass.created = function() {
  collection = Products;
  collectionName = collection._name;
};

TemplateClass.rendered = function() {
  // NOTE: This has no effect on the colorItem subform (as intended).
  AutoForm.resetForm(formName);
};

TemplateClass.helpers({
  collection: function () {
    return collection;
  },
  types: function() {
    return Products.simpleSchema().schema('type').allowedValues;
  },
  formName: function () {
    return formName;
  },
  formType: function () {
    return this.doc ? 'update' : 'insert';
  },
  color: function() {
    var doc = this.doc;
    var colorId = doc && doc.color;
    return colorId ? Colors.findOne(colorId) : null;
  }
});

TemplateClass.events({
  'click .cancel.button': function () {
    return Router.go('tables');
  }
});

function submitSubform(outerTemplate) {
  outerTemplate.$('form form').submit();
}

AutoForm.addHooks(formName, {
  formToDoc: function (doc) {
    return doc;
  },
  docToForm: function (doc) {
    doc.test = 123;
    return doc;
  },
  onSuccess: function(operation, result) {
    console.log('onSuccess', arguments);
    Router.go('tables');
  },
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log('onSubmit', arguments);
    // return false;
  },
  before: {
    insert: function (doc) {
      console.log('before insert', this, arguments);
      submitSubform(this.template);
      return doc;
    },
    update: function (docId, modifier) {
      console.log('before update', this, arguments);
      submitSubform(this.template);
      return modifier;
    }
  }
});
