var formName = 'colorItem',
    collection,
    collectionName,
    TemplateClass = Template[formName];

TemplateClass.created = function() {
  collection = Colors;
  collectionName = collection._name;
};

TemplateClass.rendered = function() {
  // NOTE: Uncommenting this line solves the issue with the inputs in this subform being cleared on
  // load.
  // AutoForm.resetForm(formName);
};

TemplateClass.helpers({
  collection: function () {
    return collection;
  },
  formName: function () {
    return formName;
  },
  formType: function () {
    return this.doc ? 'update' : 'insert';
  }
});

TemplateClass.events({
  'click .cancel.button': function () {
    return Router.go('tables');
  }
});

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
      return doc;
    },
    edit: function (docId, modifier) {
      console.log('before edit', this, arguments);
      return modifier;
    }
  }
});
