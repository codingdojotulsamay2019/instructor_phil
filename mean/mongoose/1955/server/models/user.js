const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String
}, {timestamps: true});

mongoose.model('User', UserSchema);