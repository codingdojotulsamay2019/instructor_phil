import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Book } from '../book';

@Component({
  selector: 'app-books-index',
  templateUrl: './books-index.component.html',
  styleUrls: ['./books-index.component.css']
})
export class BooksIndexComponent implements OnInit {
  books: Book[];

  constructor(private _http: HttpService) { }

  ngOnInit() {
    // get all books
    this._http.getAllBooks().subscribe(responseFromService => {
      if(responseFromService['status']) {
        this.books = responseFromService['allBooks'];
      }
    })
  }

}
