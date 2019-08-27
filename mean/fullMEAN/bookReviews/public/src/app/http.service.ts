import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';

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
}
