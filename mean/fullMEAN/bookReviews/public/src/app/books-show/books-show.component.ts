import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-books-show',
  templateUrl: './books-show.component.html',
  styleUrls: ['./books-show.component.css']
})
export class BooksShowComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _http: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe(routeParams => {
      console.log(routeParams);
      const { id } = routeParams;
      // send the id to the service
      this._http.getOneBook(id).subscribe(responseFromServer => {
        console.log(responseFromServer);
      })
    }) 
  }

}
