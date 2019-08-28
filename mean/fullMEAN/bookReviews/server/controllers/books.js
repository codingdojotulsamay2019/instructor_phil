const mongoose = require('mongoose');
const Book = mongoose.model('Book');
const Review = mongoose.model('Review');

module.exports = {
  index: (req, res) => {
    Book.find()
    .then(books => res.json({status: true, allBooks: books}))
    .catch(err => res.json({status: false, error: err}));
  },
  show: (req, res) => {
    const { bookId } = req.params;
    console.log(bookId);
    
    Book.findById(bookId)
    .then(book => res.json({status: true, oneBook: book}))
    .catch(err => res.json({status: false, error: err}));
  },
  create: (req, res) => {
    console.log(req.body);
    const book = new Book({title: req.body.title});
    // mongoose method runs validations, but does not save the book
    book.validate()
    .then(data => {
      console.log(data);
      // book is ok, check the review
      Review.create(req.body.reviews[0])
      .then(reviewCreated => {
        console.log('^'.repeat(50));
        // add the review to the book
        book.reviews.push(reviewCreated);
        // save the book
        book.save()
        .then(book => {
          console.log('book saved');
          res.json({status: true, book: book})
        })
        .catch(bookSaveError => {
          console.log('book error');
          res.json({status: false, err: bookSaveError});
        })
      })
      .catch(reviewErrors => {
        // do something with reviewErrors
        let reviewErrorArray = [];
        for(let e in reviewErrors.errors) {
          console.log(e);
          console.log('*'.repeat(50));
          console.log(reviewErrors.errors[e]);
          reviewErrorArray.push({[e]: reviewErrors.errors[e].message})
        }
        res.json({status: false, err: reviewErrorArray});
      })
    })
    .catch(bookErrors => {
      // book is invalid, send validation errors
      const errorArray = [];
      
      for(e in bookErrors.errors) {
        console.log(bookErrors.errors[e]);
        errorArray.push({[e]: bookErrors.errors[e].message});
      }
      res.json({status: false, err: errorArray});
    })
  },
  update: (req, res) => {
    const { bookId } = req.params;
    console.log('bookId', bookId);
    console.log('review in controller', req.body);
    Review.create(req.body)
    .then(review => {
      // add review to the book
      Book.findOne({_id: bookId})
      .then(book => {
        // push the review in the book reviews array
        book.reviews.push(review);
        book.save()
        .then(()=>{
          res.json({status: true, review: review});
        })
        .catch(err => {
          // save error
          res.json({status: false, error: err, from: 'save'});
        })
      })
      .catch(err => {
        // find error
        res.json({status: false, error: err, from: 'find'});
      })
    })
    .catch(err => {
      // send errors to the client
      let errorArray = [];
      for(let e in err.errors) {
        errorArray.push(err.errors[e].message);
      }
      res.json({status: false, errors: errorArray});
    })
  }
}