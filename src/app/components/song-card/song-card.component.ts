import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

type Song = {
  title: string,
  description: string,
  image: string
}

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent implements OnInit {
  allSongs: Song[] = [];
  @Input() searchTerm: string = '';
  filteredSongs: Song[] = [];
  constructor() { }
  
  ngOnInit() {
    this.getSongList();
    this.filteredSongs = this.allSongs;
  }
  getSongList() {
    this.allSongs = [
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 1',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Song Title 2',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
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

}
