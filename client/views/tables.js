TemplateClass = Template.tables;

TemplateClass.helpers({
  tableSettings: {
    rowsPerPage: 3,
    fields: [
      {
        key: 'name',
        label: 'Name'
      }
    ],
    checkbox: {
      getValue: function() {
        return true;
      }
    }
  },
  colors: function() {
    var colors = Collections.createTemporary();
    var i = 0;
    setInterval(function() {
      colors.insert({name: 'test' + i});
      i++;
    }, 1000);
    return colors;
  }
});

// TemplateClass.rendered = function() {
//   var $table = this.$('.collection-table');
//   $table.o
// };

TemplateClass.events({
  'check .collection-table': function(e, template, checkEvent) {
    console.log('check', checkEvent, this, arguments);
  },
  'select .collection-table': function(e, template) {
    console.log('click', this, arguments);
  }
});


