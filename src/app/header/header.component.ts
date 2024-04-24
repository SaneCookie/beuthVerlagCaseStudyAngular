import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn;

  constructor(private authService: AuthenticationService) {
    this.isLoggedIn = authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
  }
}
