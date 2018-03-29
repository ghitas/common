import { Injectable } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private isUserLoggedIn = false;
  private username;
  constructor(
    private http: Http
  ) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(id, pass) {
    this.isUserLoggedIn = false;
    var data = { "userId": id, "password": pass };
    var res = this.post("http://45.77.247.155:8080/youtube/login", data).subscribe((res) => this.isUserLoggedIn = true, (err) => err);
    this.getUserLoggedIn();
  }

  getUserLoggedIn() {
    console.log(this.isUserLoggedIn);
    return this.isUserLoggedIn;
  }

  post(url: string, json: any): Observable<any> {
    let headers = new Headers();
    headers.append("Content-Type", "application/json;charset=UTF-8");
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(json), { headers })
      .map(res => res.json())
      .catch(err => err);
  }
}
