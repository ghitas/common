import { Component, ElementRef, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { PlayListService } from '../../services/playlist.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private _playListService: PlayListService) { }

    ngOnInit() {
    }

    login() {
        
    }

}
