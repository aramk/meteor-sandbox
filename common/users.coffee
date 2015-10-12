USERNAME = 'john'
PASSWORD = 'password'

if Meteor.isServer
  selector = {username: USERNAME}
  Meteor.users.upsert selector, $set:
    username: USERNAME
    'profile.name': 'John Smith'
  user = Meteor.users.findOne(selector)
  Accounts.setPassword(user._id, PASSWORD)
else
  Meteor.loginWithPassword USERNAME, PASSWORD, (err, result) ->
    if err
      Logger.error(err)
    else
      Logger.info('Logged in', result)
