const express = require('express');
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');


mongoose.connect('mongodb://localhost/booksAndAuthors', {useNewUrlParser: true});

const AuthorSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required']}
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(flash());
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.get('/author', (req, res) => {
  console.log('in root route');
  Author.find()
  // Author.find() returns a promise -> async code
  .then(allAuthors => res.render('author', {authors: allAuthors, err: false}))
  .catch(err => res.render('author', {err: err}))
})

app.post('/author', (req, res) => {
  console.log(req.body);
  let name = req.body.name;
  Author.create(req.body)
  .then(successResult => console.log(successResult))
  .catch(err => {
    for(let e in err.errors) {
      console.log(err.errors[e].message);
      req.flash('name', err.errors[e].message);
    }
  })
  .finally(() => {
    res.redirect('/');
  })
})

app.listen(8888, () => console.log('listening on port 8888'));