const mongoose = require('mongoose');
const ReviewSchema = require('./review');

const BookSchema = new mongoose.Schema({
  title: {type: String, required: [true, 'Book title is required!'], minlength: [2, 'Title must be at least 2 chars long']},
  reviews: [ReviewSchema]
}, {timestamps: true});

mongoose.model('Book', BookSchema);