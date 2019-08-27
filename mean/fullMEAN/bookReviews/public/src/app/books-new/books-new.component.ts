import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Review } from '../review';
import { HttpService } from '../http.service';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-new',
  templateUrl: './books-new.component.html',
  styleUrls: ['./books-new.component.css']
})
export class BooksNewComponent implements OnInit {
  book: Book = new Book();
  review: Review = new Review();
  title: string = "";
  content: string = "";
  rating: string = "";
  name: string = "";

  newBook = {
    'title': "",
    rating: []
  }
  constructor(private _http: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addBook() {
    this.book.reviews[0]=this.review;
    console.log('book in new book component', this.book);
    console.log('review in new book component', this.review)
    // send the book to the services
    this._http.addBookInService(this.book).subscribe(responseFromServer => {
      if(responseFromServer['status']) {
        // book and review was added successfully
        // reset form models and error messages
        this.title = "";
        this.content = "";
        this.rating = "";
        this.name = "";
        this.book = new Book();
        this.review = new Review();
        // redirect to home
        this._router.navigate(['/books']);
      } else {
        // display errors
        for(let i in responseFromServer['err']) {
          for(let err in responseFromServer['err'][i]) {
            this[err] = responseFromServer['err'][i][err];
          }
        }
      }
    })
  }

}
