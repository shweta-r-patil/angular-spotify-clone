import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {
    
  }
  navigateToLoginPage() {
    this.router.navigate(['/', 'login'])
  }
}
