var formName = 'productItem',
    collection,
    collectionName,
    template = Template[formName];

template.created = function() {
  collection = Products;
  collectionName = collection._name;
};

AutoForm.addHooks(formName, {
  onSuccess: function(operation, result) {
    console.log('onSuccess', arguments);
  },
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log('onSubmit', arguments);
//    return false;
  }
});
