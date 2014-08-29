var formName = 'productItem',
    collection,
    collectionName,
    TemplateClass = Template[formName];

TemplateClass.created = function() {
  collection = Products;
  collectionName = collection._name;
};

TemplateClass.helpers({
  collection: function () {
    return collection;
  },
  formName: function () {
    return formName;
  }
});

AutoForm.addHooks(formName, {
  formToDoc: function (doc) {
    return doc;
  },
  docToForm: function (doc) {
    return doc;
  },
  onSuccess: function(operation, result) {
    console.log('onSuccess', arguments);
  },
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log('onSubmit', arguments);
//    return false;
  },
  before: {
    insert: function (doc) {
      console.log('before insert', this, arguments);
      return doc;
    },
    edit: function (docId, modifier) {
      console.log('before edit', this, arguments);
      return modifier;
    }
  }
});
