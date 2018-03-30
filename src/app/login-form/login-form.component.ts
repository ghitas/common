import { Component, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../user.service";
import { AppService } from "../app.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnDestroy {
  ngOnDestroy(): void {
  }
  constructor(
    private router: Router, private user: UserService, private appservice: AppService
  ) { }

  loginUser(e): void {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    this.user.setUserLoggedIn(username, password);
  }
  testDialog():void{
    this.appservice.showPopup("thong bao", "noi dung thong bao", true,"Yes","No","del");
  }
}
