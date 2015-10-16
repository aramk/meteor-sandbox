TemplateClass = Template.mainLayout

TemplateClass.rendered = ->
  # @$('.ui.dropdown').dropdown(action: 'hide')
  $popup = @$('.ui.popup')
  $menu = @$('.ui.text.menu')
  $menu.popup
    position: 'bottom right'
    on: 'click'

TemplateClass.helpers
  userName: -> Meteor.user()?.profile.name
