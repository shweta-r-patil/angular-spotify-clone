import { Component, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { songs } from '../../../songs';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-player',
  standalone: true, 
  templateUrl: './song-player-bottom.component.html',
  styleUrls: ['./song-player-bottom.component.scss'],
  imports: [MatIconModule, CommonModule, FormsModule],
})
export class SongPlayerComponent {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  songs = songs;
  currentSongIndex = 0;
  currentSong = this.songs[this.currentSongIndex];
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  volume = 1;

  togglePlayPause() {
    const audio = this.audioPlayerRef.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    this.currentTime = this.audioPlayerRef.nativeElement.currentTime;
  }

  setDuration() {
    this.duration = this.audioPlayerRef.nativeElement.duration;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  seekAudio(event: any) {
    this.audioPlayerRef.nativeElement.currentTime = event.target.value;
  }

  setVolume(event: any) {
    this.audioPlayerRef.nativeElement.volume = event.target.value;
  }

  previousSong() {
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.loadSong();
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.loadSong();
  }

  loadSong() {
    this.currentSong = this.songs[this.currentSongIndex];
    this.audioPlayerRef.nativeElement.load();
    this.isPlaying = false;
    this.togglePlayPause(); // Automatically start playing the next song
  }
}
