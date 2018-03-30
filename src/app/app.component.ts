import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Jsonp } from '@angular/http';
import { AppService } from "./app.service";
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  objectKeys = Object.keys;
  url: string;
  params: string;
  route: string;
  subs = new Subscription;
  resMess: any;
  teoinit():void{
    debugger;
    document.getElementById("lined")[0].linedtextarea(
      { selectedLine: 1 }
    );
  };
  constructor(
    private http: Http,
    private service: AppService,
    private _jsonp: Jsonp
  ) {
    if (window.location.href.indexOf("code=") > 0) {
      var token = window.location.href.split("code=")[1];
      this.createList(token);
    }
    this.subs = this.service.dialogSaid$.subscribe(mess => {
      this.resMess = mess;
      console.log(mess);
    });
  }
  Oauth2(): void {
    var OAUTHURL = 'https://accounts.google.com/o/oauth2/auth?';
    var VALIDURL = 'https://accounts.google.com/o/oauth2/token';
    var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    //var SCOPE = 'https://www.googleapis.com/auth/youtube';
    var CLIENTID = '364602988528-7nbkl7eertpdfomppohbcrosdte8snln.apps.googleusercontent.com';
    var REDIRECT = 'http://localhost:8080/callback'
    var LOGOUT = 'http://accounts.google.com/Logout';
    var TYPE = 'token';
    var _url = OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
    var acToken;
    var tokenType;
    var expiresIn;
    var user;
    var loggedIn = false;
    login();
    function login() {
      _url = "https://accounts.google.com/o/oauth2/auth?" +
        "redirect_uri=http://localhost:8080/callback&" +
        "response_type=code&" +
        "client_id=708889878754-7ta8gosbcb6gu82mr7vm8t7dtpb0nejk.apps.googleusercontent.com&" +
        "scope=https://www.googleapis.com/auth/youtube&" +
        "approval_prompt=force&" +
        "access_type=offline";
      window.location.href = _url;
      // var win = window.open(_url, "windowname1", 'width=800, height=600');

      // var pollTimer = window.setInterval(function () {
      //   try {
      //     if (win.document.URL.indexOf(REDIRECT) != -1) {
      //       window.clearInterval(pollTimer);
      //       var url = win.document.URL;
      //       //acToken = url.split("#")[0];
      //       acToken = acToken.split("code=")[1];
      //       win.close();
      //       this.createList(acToken);
      //     }
      //   } catch (e) {
      //   }
      // }, 500);
    }
  }
  createList(autho: string) {
    console.log("teo");
    var url = "http://45.77.247.155:8080/youtube/addPlaylist";
    var method = "POST";
    var postData = {
      "name": "Xin Chao",
      "privacy": "public",
      "description": "testing",
      "authCode": autho
    };
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = 'text';
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = processRequest;
    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //var response = JSON.parse(xhr.responseText);
        console.log(xhr.response);
        console.log(xhr.responseText);
      }
    }
    xhr.send(JSON.stringify(postData));
  }

  title = 'My First Angular App!';
}

