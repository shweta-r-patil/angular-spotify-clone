import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

type SongList = {
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
  // @Input() public playlistThumbnail!: string;
  // @Input() public image!: string;
  // @Input() public title!: string;
  // @Input() public description!: string;
  songCategory: SongList[] = [];
  // songC: any;

  constructor() { }
  ngOnInit() {
    this.getSongList();
  }
  getSongList() {
    this.songCategory = [
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
}
