import { Component, ElementRef, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { PlayListService } from '../../services/playlist.service';

@Component({
    selector: 'right-content',
    templateUrl: './right-content.component.html',
    styleUrls: ['./right-content.component.css']
})
export class RightContentComponent implements OnInit {
    playlistTexts = '';
    playlistNames: string[] = [];
    usedPlaylistNames: string[] = [];
    message: string = '';

    constructor(private _eventService: EventService,
        private _playListService: PlayListService) { }

    ngOnInit() {
        this._eventService.startPlaylist$.subscribe(event => {
            this.addPlayList();
        });
    }

    addPlayList() {
        // disable button create playlist
        this._eventService.creatingPlaylist.next(true);

        // get valid play list names
        this.playlistNames = this._getPlaylistNames();
        
        // create playlists
        var count: number = 0;
        if(this.playlistNames.length == 0){
            this._eventService.creatingPlaylist.next(false);
            this.playlistTexts= '';
        } else {
            for (var i = 0; i < this.playlistNames.length; i++) {
                this._playListService.addPlaylist(this.playlistNames[i]).subscribe((res) => {

                    // count number of play list are created
                    if (JSON.parse(res._body).code == 0) {
                        count = count + 1;
                    }
    
                    // after finish reating all play lists, enable button create play list
                    if(count == this.playlistNames.length){
                        this._eventService.creatingPlaylist.next(false);
                        this.usedPlaylistNames = this.playlistNames;
                        this.playlistTexts= '';
                    }
                });
            }
        }
    }

    private _getPlaylistNames(){
        var rawPlaylistNames = this.playlistTexts.split('\n');
        var tempPlaylistNames : any[] = [];
        for (var i = 0; i < rawPlaylistNames.length; i++) {
            if(rawPlaylistNames[i]){
                tempPlaylistNames.push(rawPlaylistNames[i]);
            }
        }

        return tempPlaylistNames
    }

}
