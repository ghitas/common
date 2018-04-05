import { Component, ElementRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EventService } from '../../services/event.service';

@Component({
    selector: 'left-content',
    templateUrl: './left-content.component.html',
    styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit{
    message: string = '';
    disableCreatePlayListBtn: boolean = false;

    constructor(private _eventService: EventService) { }

    ngOnInit(){
        this._eventService.creatingPlaylist$.subscribe(event => {
            this.disableCreatePlayListBtn = event;
            if(!this.disableCreatePlayListBtn){
                this.message = 'Đã tạo play list thành công !!!!!!!';
                setTimeout(() => {
                    this.message = '';
                }, 2000);
            }
        });
    }

    createPlaylist(){
        if(!this.disableCreatePlayListBtn){
            this._eventService.startPlaylist.next(true);
        }
    }
}
