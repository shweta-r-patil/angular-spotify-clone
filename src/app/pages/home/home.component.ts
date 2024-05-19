import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component'
import { SongCardComponent } from '../../components/song-card/song-card.component';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, SongCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() { }
}
