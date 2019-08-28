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
        this.calculateRating();
      }
    })
  }

  calculateRating() {
    for(let i in this.books) {
      console.log(i);
      let sum = 0;
      for(let review = 0; review < this.books[i].reviews.length; review++){
        sum+=this.books[i].reviews[review].rating;
        console.log(this.books[i].reviews[review].rating);
      }
      this.books[i]['average'] = sum/this.books[i].reviews.length
    }
  }

}
