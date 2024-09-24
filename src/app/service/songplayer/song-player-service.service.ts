import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { songs } from '../../../songs';

@Injectable({
  providedIn: 'root'
})
export class SongPlayerService {
  private songs = songs;
  private currentSongIndex = 0;

  // TODO: Fix type
  private currentSongSubject = new BehaviorSubject<any>(songs[0]);
  currentSong$ = this.currentSongSubject.asObservable();

  playSong(song: any) {
    console.log(song);
    const index = this.songs.findIndex(s => s.id === song.id);
    if (index !== -1) {
      this.currentSongIndex = index;
      this.currentSongSubject.next(song);
    }
  }

  playPreviousSong() {
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.currentSongSubject.next(this.songs[this.currentSongIndex]);
  }

  playNextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.currentSongSubject.next(this.songs[this.currentSongIndex]);
  }
}
