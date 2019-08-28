import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Review } from '../review';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-reviews-new',
  templateUrl: './reviews-new.component.html',
  styleUrls: ['./reviews-new.component.css']
})
export class ReviewsNewComponent implements OnInit {
  @Input() oneBook: Book;
  review: Review = new Review();
  reviewErrors: string[];
  averageRating: number;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    console.log('book in new review component', this.oneBook);
  }

  addReview() {
    this._http.addNewReview(this.oneBook._id, this.review).subscribe(responseFromServer => {
      console.log(responseFromServer);
      if(responseFromServer['status']) {
        // review was added
        this.reviewErrors = [];
        this.review = new Review();
        this.oneBook.reviews.push(responseFromServer['review']);
      } else {
        // display the errors
        this.reviewErrors = responseFromServer['errors'];
      }
    })
  }

}
