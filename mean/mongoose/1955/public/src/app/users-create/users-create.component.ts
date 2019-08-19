import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  userName: string;
  @Input() users;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  addUser() {
    console.log("user name in create component", this.userName);
    this._http.addUserMethodInService(this.userName).subscribe(dataFromExpress => {
      console.log(dataFromExpress);
      if(dataFromExpress['status'] == true) {
        this.users.push(dataFromExpress['user']);
        this.userName = "";
      } else {
        console.log(dataFromExpress['error'])
      }
    })
  }

}
