const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booksWithReviews', {useNewUrlParser:  true});

const modelPath = __dirname + '/../models/';

console.log(modelPath);

fs.readdirSync(modelPath).forEach((file)=> {
  if(file.indexOf('.js') >= 0) {
    require(modelPath + '/' + file);
  }
})