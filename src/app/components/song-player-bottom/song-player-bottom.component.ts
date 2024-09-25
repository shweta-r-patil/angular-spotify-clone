import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISong, songs } from '../../../songs';
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
export class SongPlayerComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  currentTime = 0;
  duration = 0;
  volume = 1;
  

  constructor(public songPlayerService: SongPlayerService) {}
  ngOnInit(): void {
    this.songPlayerService.songSubject.subscribe((s) => {
      console.log("subscription called: ", s)
      this.loadSong()
    })
  }

  togglePlayPause() {
    const audio = this.audioPlayerRef.nativeElement;
    if (this.songPlayerService.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.songPlayerService.isPlaying = !this.songPlayerService.isPlaying;
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
      this.songPlayerService.isPlaying = false;
      this.togglePlayPause(); // Automatically start playing the new song
    }
  }
}
