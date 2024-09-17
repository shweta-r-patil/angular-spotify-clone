import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { songs } from '../../../songs';

@Component({
  selector: 'app-recents-left-list',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './recents-left-list.component.html',
  styleUrl: './recents-left-list.component.scss',
})
export class RecentsLeftListComponent {
  songs = songs;
}
