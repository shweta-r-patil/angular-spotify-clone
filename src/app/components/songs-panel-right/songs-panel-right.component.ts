import { Component } from '@angular/core';
import { songs } from '../../../songs';
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-songs-panel-right',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './songs-panel-right.component.html',
  styleUrl: './songs-panel-right.component.scss'
})
export class SongsPanelRightComponent {
  songs = songs;
  username = "shweta.patil"
}
