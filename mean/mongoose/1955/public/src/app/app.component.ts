import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Hello World!';
  allUsers: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    // call the services method
    this._httpService.getUsers().subscribe(usersFromServices => {
      console.log('users from component: ', usersFromServices);
      this.allUsers = usersFromServices;
    })
    
  }

}
