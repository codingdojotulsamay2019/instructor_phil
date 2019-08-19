import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

  @Input() users: any;

  constructor() { }

  ngOnInit() {
  }

}
