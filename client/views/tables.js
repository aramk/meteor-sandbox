Template.tables.helpers({
  tableSettings: {
    rowsPerPage: 3,
    fields: [
      {
        key: 'name',
        label: 'Name'
      }
    ]
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
