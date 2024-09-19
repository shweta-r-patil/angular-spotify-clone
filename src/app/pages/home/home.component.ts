import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component'
import { RecentsLeftListComponent } from '../../components/recents-left-list/recents-left-list.component';
import { SongCardComponent } from '../../components/song-card/song-card.component';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { SongPlayerComponent } from "../../components/song-player-bottom/song-player-bottom.component";
import { SongsPanelRightComponent } from '../../components/songs-panel-right/songs-panel-right.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, SongCardComponent, CommonModule, MatIconModule, RecentsLeftListComponent, SongPlayerComponent, SongsPanelRightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
}
