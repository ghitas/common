import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class EventService {
  startPlaylist = new Subject<boolean>();
  startPlaylist$ = this.startPlaylist.asObservable();

  creatingPlaylist = new Subject<boolean>();
  creatingPlaylist$ = this.creatingPlaylist.asObservable();



  constructor(){}


  

}
