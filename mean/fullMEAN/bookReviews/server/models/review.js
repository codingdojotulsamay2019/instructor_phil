const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required!'], minlength: [2, 'Name must be at least 2 chars long']},
  content: {type: String, required: [true, 'Content is required!'], minlength: [5, 'Content must be at least 5 chars long']},
  rating: {type: Number, min: [1, "Must be between 1 and 5"], max: [5, "Must be between 1 and 5"]}
}, {timestamps: true});

mongoose.model('Review', ReviewSchema);

module.export = ReviewSchema;