Meteor.startup(function() {

  Products.after.update(function() {
    if (this.previous == null) {
      console.log('No previous');
    } else {
      console.log(this.previous);
    }
    // console.log(arguments, this.previous);
  });

  // Products.before.update(function() {
  //   console.log(arguments);
  // });

  // Products.before.insert(function() {
  //   console.log(arguments);
  // });
  
  window.runInsertTest = function() {
    Products.insert({name: 'test', type: 'Fruit'}, function(err, result) {
      console.log('Products', err, result);
    });
  };

  window.runHookTest = function() {

    Collections.removeAllDocs(Products);
    var dfs = [];
    _.times(10, function(i) {
      var df = Q.defer();
      dfs.push(df.promise);
      Products.insert({name: i, type: 'Fruit'}, function(err, result) {
        if (err) {
          df.reject(err);
        } else {
          df.resolve(result);
        }
      });
    });
    Q.all(dfs).then(function() {
      console.log('Products', Products.find().fetch());
      setTimeout(function() {
        console.log('>>>');
        _.times(2, function() {
          _.each(Products.find().fetch(), function(product) {
            Products.update(product._id, {$set: {name: product.name + '!'}});
          });
        });
      }, 1000);
    });

  };

});
