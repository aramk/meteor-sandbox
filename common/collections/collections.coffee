SimpleSchema.debug = true

if Meteor.isClient

  Notifications.config
    Logger:
      level: 'error'

  notifs = [
    {title: 'Information', content: 'This is a test'}
    {title: 'Information', content: 'This is a test', label: 'info'}
    {title: 'Warning', content: 'This is a test', label: 'warn'}
    {title: 'Error', content: 'This is a test', label: 'error'}
    {title: 'Debug', content: new Array(20).join('This is a test.'), label: 'debug'}
  ]
  _.each notifs, (notif, i) -> _.delay (-> Notifications.add(notif)), 500 * i

  # Comments.config()

  # // comments = [
  # //   {content: 'This is a comment'}
  # //   'This is another comment'
  # // ]
  # // _.each comments, (comment, i) -> _.delay (-> Comments.add(comment)), 500 * i
