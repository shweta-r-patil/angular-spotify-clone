import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit {
  searchedItem: string = '';
  @Output() emitsearchedItem:  EventEmitter<any> = new EventEmitter<any>();
  constructor(public router: Router) {}
  ngOnInit(): void {
    
  }
 
  onSearchChange(value: string) {
    this.searchedItem = value;
    this.emitsearchedItem.emit(this.searchedItem);
  }
  navigateToLoginPage() {
    this.router.navigate(['/', 'login'])
  }
}
