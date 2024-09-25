import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISong, songs } from '../../../songs';

@Injectable({
  providedIn: 'root'
})
export class SongPlayerService {
  private songs = songs;
  private currentSongIndex = 0;
  currentSong = songs[0]
  isPlaying = false
  songSubject = new BehaviorSubject<ISong>(songs[0])


  playSong(song: ISong) {
    console.log("Inside song service: ", song);
    const index = this.songs.findIndex(s => s.id === song.id);
    if (index !== -1) {
      console.log("Setting new song")
      this.currentSongIndex = index;
      this.currentSong = this.songs[this.currentSongIndex]
      this.songSubject.next(songs[this.currentSongIndex])
      this.isPlaying = true
    }
  }

  playPreviousSong() {
    console.log("Setting previous song")
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.currentSong = this.songs[this.currentSongIndex]
    this.songSubject.next(songs[this.currentSongIndex])
  }

  playNextSong() {
    console.log("Setting next song")
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.currentSong = this.songs[this.currentSongIndex]
    this.songSubject.next(songs[this.currentSongIndex])

  }
}
