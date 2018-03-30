import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { JsonpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooderComponent } from './fooder/fooder.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from "./authguard.guard";
import { ModalAnnouceComponent } from './modal-annouce/modal-annouce.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooderComponent,
    LoginFormComponent,
    DashboardComponent,
    ModalAnnouceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [AppService, UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
