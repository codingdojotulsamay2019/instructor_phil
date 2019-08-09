// requiring express from the node_modules directory
const express = require('express');
// initilizing express in app variable
const app = express();

// gives us access to posts form data from request object
app.use(express.urlencoded({extended: true}));

// set our static content in a static directory
app.use(express.static(__dirname + "/static"));

// set up express to use ejs
console.log(__dirname);
console.log(process.env);
app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(req);
  res.render('index');
})

app.post('/users', (req, res) => {
  // by using express.urlendcoded, we have access to the form data through the request body object
 	console.log(req.body);
  res.redirect('/');
})

// set up express to run on port 8000
app.listen(8000, () => {
  console.log("Listening on port 8000");
})
