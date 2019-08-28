import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _api: HttpClient) { }

  addBookInService(book: Book) {
    console.log('book in the httpservice', book);
    return this._api.post('/api/books', book);
  }

  getAllBooks() {
    return this._api.get('/api/books');
  }

  getOneBook(bookId: string) {
    console.log('bookid in service', bookId);
    return this._api.get(`/api/books/${bookId}`);
  }

  addNewReview(bookId: string, review: Review) {
    console.log('BookId in service', bookId);
    console.log('review in service', review);
    return this._api.put(`/api/books/${bookId}`, review);
  }
}
