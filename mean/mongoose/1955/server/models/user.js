const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required!']}
}, {timestamps: true});

mongoose.model('User', UserSchema);