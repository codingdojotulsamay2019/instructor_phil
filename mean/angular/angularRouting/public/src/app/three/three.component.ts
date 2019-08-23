import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=> {
      console.log(params['id']);
      
    })
  }

}
