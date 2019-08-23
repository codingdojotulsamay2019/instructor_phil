import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  buttonClicked() {
    // navigate to the one component routerlink
    this._router.navigate(['one']);
  }
}
