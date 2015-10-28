TemplateClass = Template.mainLayout

TemplateClass.rendered = ->
  # @$('.ui.dropdown').dropdown(action: 'hide')
  $popup = @$('.ui.popup')
  $menu = @$('.user.menu > .ui.menu')
  $menu.popup
    position: 'bottom right'
    on: 'click'
    onVisible: ->
      # Scroll to the top of the notification list if unread items exist so they're visible.
      if Notifications.getUnreadCount() > 0 then TemplateClass.scrollToTop($popup)

TemplateClass.helpers
  userName: -> Meteor.user()?.profile.name
  hasUnreadNotifications: -> Notifications.getUnreadCount() > 0

TemplateClass.events
  'click .clear-all': -> Notifications.readAll()
