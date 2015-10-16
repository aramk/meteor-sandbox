TemplateClass = Template.mainLayout

TemplateClass.rendered = ->
  # @$('.ui.dropdown').dropdown(action: 'hide')
  $popup = @$('.ui.popup')
  $menu = @$('.user.menu > .ui.menu')
  $menu.popup
    position: 'bottom right'
    on: 'click'

TemplateClass.helpers
  userName: -> Meteor.user()?.profile.name
