import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username!: string | null;
  name!: string | null;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.name = this.authService.isLoggedIn()
      ? this.authService.getUsername()
      : null;
  }
}
