import { Component } from '@angular/core';
import { songs } from '../../../songs';
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { SongPlayerService } from '../../service/songplayer/song-player-service.service'; // Add this import

@Component({
  selector: 'app-songs-panel-right',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './songs-panel-right.component.html',
  styleUrl: './songs-panel-right.component.scss',
  providers: [SongPlayerService] 
})
export class SongsPanelRightComponent {
  songs = songs;
  username = "shweta.patil";

  constructor(private songPlayerService: SongPlayerService) {} 

  playSong(song: any) { 
    console.log("playing song", song);
    this.songPlayerService.playSong(song);
  }
}
