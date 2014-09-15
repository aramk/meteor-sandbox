var formName = 'submitForm',
    collection,
    TemplateClass = Template[formName];

TemplateClass.created = function() {
  collection = Products;
};

TemplateClass.helpers({
  collection: function () {
    return null;
  },
  formName: function () {
    return formName;
  },
  formType: function () {
    return null;
  },
  schema: function() {
    return collection.schema;
  }
});

AutoForm.addHooks(formName, {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log('onSubmit', arguments);
    return false;
  },
  formToDoc: function (doc) {
    console.log('formToDoc', arguments);
    return doc;
  }
//  before: {
//    insert: function (doc) {
//      console.log('before insert', this, arguments);
//      return doc;
//    },
//    edit: function (docId, modifier) {
//      console.log('before edit', this, arguments);
//      return modifier;
//    }
//  }
});
