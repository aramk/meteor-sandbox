Meteor.startup ->

  Form = Forms.defineModelForm
    name: 'productForm'
    collection: Products
    # reactive: true
    hooks:
      docToForm: (doc) ->
        doc.test = 123
        doc
      onSuccess: (operation, result) ->
        console.log('onSuccess', arguments)
        Router.go('tables')
      onSubmit: (insertDoc, updateDoc, currentDoc) ->
        console.log('onSubmit', arguments)
        # return false
      before:
        insert: (doc) ->
          console.log('before insert', this, arguments)
          submitSubform(@template)
          doc
        update: (docId, modifier) ->
          console.log('before update', this, arguments)
          submitSubform(@template)
          modifier

  Form.helpers
    types: -> Products.simpleSchema().schema('type').allowedValues
    color: ->
      doc = @doc
      colorId = doc && doc.color
      if colorId then Colors.findOne(colorId) else null

  Form.events
    'click .cancel.button': -> Router.go('tables')

  submitSubform = (outerTemplate) -> outerTemplate.$('form form').submit()
