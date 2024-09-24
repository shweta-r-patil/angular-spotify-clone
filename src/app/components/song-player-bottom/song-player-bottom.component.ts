import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { songs } from '../../../songs';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SongPlayerService } from '../../service/songplayer/song-player-service.service';

@Component({
  selector: 'app-song-player',
  standalone: true,
  templateUrl: './song-player-bottom.component.html',
  styleUrls: ['./song-player-bottom.component.scss'],
  imports: [MatIconModule, CommonModule, FormsModule],
})
export class SongPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  songs = songs;
  currentSongIndex = 0;

  // TODO: Fix type
  currentSong: any;
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  volume = 1;

  private songSubscription: Subscription = new Subscription();

  constructor(private songPlayerService: SongPlayerService) {}

  ngOnInit(): void {
    this.songSubscription = this.songPlayerService.currentSong$.subscribe(
      (song) => {
        if (song) {
          this.currentSong = song;
          this.loadSong();
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.songSubscription) {
      this.songSubscription.unsubscribe();
    }
  }

  togglePlayPause() {
    console.log("toggle play pause");
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
    this.songPlayerService.playPreviousSong();
  }

  nextSong() {
    this.songPlayerService.playNextSong();
  }

  loadSong() {
    if (this.audioPlayerRef) {
      this.audioPlayerRef.nativeElement.load();
      this.isPlaying = false;
      this.togglePlayPause(); // Automatically start playing the new song
    }
  }
}
