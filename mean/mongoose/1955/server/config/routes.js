const users = require('./../controllers/users');

module.exports = (app) => {
  app.get('/users', users.index),
  app.post('/users', users.create),
  app.get('/:name', users.show)
  app.get('/remove/:name', users.destroy)
}