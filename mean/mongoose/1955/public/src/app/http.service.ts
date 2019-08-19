import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getUsers():Observable<object> {
    // get all user from express, express returns an observable
    return this._http.get('/users');
  }

  addUserMethodInService(userName: string):Observable<object> {
    return this._http.post('/users', {name: userName});
  }

}
