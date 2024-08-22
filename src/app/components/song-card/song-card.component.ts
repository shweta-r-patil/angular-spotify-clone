import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

type Song = {
  title: string,
  description: string,
  image: string,
  audioUrl: any;
}

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent implements OnInit {
  allSongs: Song[] = [];
  @Input() searchTerm: string = '';
  filteredSongs: Song[] = [];
  audio: HTMLAudioElement | undefined;
  isPlaying: boolean = false;
  currentPlayingIndex: number | null = null;
  constructor() { }
  
  ngOnInit() {
    this.getSongList();
    this.filteredSongs = this.allSongs;
  }
  getSongList() {
    this.allSongs = [
      {
        'title': 'Alien ost',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2022/01/08/audio_8a76d1ca5b.mp3"
      },
      {
        'title': 'Sky',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2022/01/08/audio_9bb82558f6.mp3"
      },
      {
        "title": "Get Some Rest",
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/08/30/audio_0bc5137ad4.mp3"
      },
      {
        'title': 'Be With You',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/06/15/audio_b8328c7a49.mp3"
      },
      {
        'title': 'Minimalistic Light Ambient',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2024/04/10/audio_a002e4c68e.mp3"
      },
      {
        'title': 'happy edm',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/12/09/audio_445787f109.mp3"
      },
      {
        'title': 'Minimalistic Inspiration Design Ambient',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2024/04/10/audio_700ba63d30.mp3"
      },
      {
        'title': 'Minimalistic Design Ambient Background',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/10/05/audio_8544d22db8.mp3"
      },
      {
        'title': 'Hypnotic Hip Hop Beat',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/01/05/audio_297daed87c.mp3"
      },
      {
        'title': 'Cupid / Stylish Upbeat RnB Beat',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/04/30/audio_af76a50d34.mp3"
      },
      {
        'title': 'Subterranean Homesick Alien',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/10/05/audio_8544d22db8.mp3"
      },
      {
        'title': 'Phonk Less',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/09/26/audio_0275760908.mp3"
      },
      {
        'title': 'What happen to me',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2024/04/27/audio_5e68a7fb68.mp3"
      },
      {
        'title': 'Whiplash - Audio Tonic',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/12/21/audio_60b53d002a.mp3"
      },
      {
        'title': 'HIPHOP Simple beat 2',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/08/04/audio_3aea8c32bf.mp3"
      },
      {
        'title': 'Crash',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/12/09/audio_445787f109.mp3"
      },
      {
        'title': 'Happy edm',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/12/09/audio_445787f109.mp3"
      },
      {
        'title': 'Hipnotic Hip Hop Beat',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2024/01/09/audio_7355016257.mp3"
      },
      {
        'title': 'Quick Spit',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2024/01/09/audio_7355016257.mp3"
      },
      {
        'title': 'Deep House Arcade',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/06/25/audio_ded864e440.mp3"
      },
      {
        'title': 'Glitch',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2022/12/17/audio_e02ae20435.mp3"
      },
      {
        'title': 'Strangers',
        'description': 'Cinematic Rythmline',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/06/02/audio_320a2e0f57.mp3"
      },
      {
        'title': 'Ocean Breeze beat by JTWAYNE',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2024/05/29/audio_f3a1d24f19.mp3"
      },
      {
        'title': 'Perfection',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png",
        'audioUrl': "https://cdn.pixabay.com/audio/2023/06/15/audio_b8328c7a49.mp3"
      }
    ]
  }

  ngOnChanges() {
    this.filterSongs();
  }

  filterSongs() {
    if (!this.searchTerm) {
      this.filteredSongs = this.allSongs;
    } else {
      if (this.searchTerm && this.searchTerm.length >= 1) {
        this.filteredSongs = this.allSongs.filter((song) => song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          song.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
    }
  }
  playSong(song: Song, index: number) {
    this.audio = new Audio(song.audioUrl);
    this.audio.play();
    if (this.audio && this.currentPlayingIndex !== null && this.currentPlayingIndex !== index) {
      this.audio.pause();
    }
    this.currentPlayingIndex = index;    
  }

  pauseSong() {
    if (this.audio) {
      this.audio.pause();
    }
    this.currentPlayingIndex = null;
  }

}
