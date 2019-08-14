const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  index: (req, res) => {
    // get all users
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
  },
  create: (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
  },
  show: (req, res) => {
    const { name } = req.params;
    User.findOne({name: name})
    .then(user => res.json(user))
    .catch(err => res.json(err))
  },
  destroy: (req, res) => {
    const { name } = req.params;
    User.remove({name: name})
    .then(result => res.json(result))
    .catch(err => res.json(err))
  }
}