SimpleSchema.debug = true

if Meteor.isClient

  Notifications.config
    Logger:
      level: 'error'

  notifs = [
    {title: 'Information', content: 'This is a test'}
    {title: 'Information', content: 'This is a test', level: 'info'}
    {title: 'Warning', content: 'This is a test', level: 'warn'}
    {title: 'Error', content: 'This is a test', level: 'error'}
    {title: 'Debug', content: new Array(20).join('This is a test.'), level: 'debug'}
  ]
  _.each notifs, (notif, i) -> _.delay (-> Notifications.add(notif)), 500 * i

  # Comments.config()

  # // comments = [
  # //   {content: 'This is a comment'}
  # //   'This is another comment'
  # // ]
  # // _.each comments, (comment, i) -> _.delay (-> Comments.add(comment)), 500 * i
