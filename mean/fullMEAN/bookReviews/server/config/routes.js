const books = require('./../controllers/books');
const path = require('path');

module.exports = (app) => {
  app.get('/api/books', books.index);
  app.post('/api/books', books.create);
  app.get('/api/books/:bookId', books.show);
  app.put('/api/books/:bookId', books.update);
  app.all('*', (req, res)=>{
    console.log('in catch all');
    res.sendFile(path.resolve('public/dist/public/index.html'));
  })
}