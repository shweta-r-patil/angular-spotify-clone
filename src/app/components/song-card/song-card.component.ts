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
        "title": "Death Bed",
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Morning Mr Magpie',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Little by Little',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Feral',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Lotus Flower',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Lotus Flower',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Give Up the Ghost',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Separator',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Airbag',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Paranoid Android',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Subterranean Homesick Alien',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Exit Music (For a Film)',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Let Down',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Karma Police',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Fitter Happier',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Electioneering',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Climbing Up the Wall',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'No Surprises',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Lucky',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Mysterons',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Sour Times',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Strangers',
        'description': 'Description of Song 2',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'It Could Be Sweet',
        'description': 'Description of Song 1',
        'image': "../../../assets/Music-Icon.png"
      },
      {
        'title': 'Wandering Star',
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
