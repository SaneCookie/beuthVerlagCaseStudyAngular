import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (name) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        if (this.username === '' || this.password === '') {
          this.errorMessage =
            'Benutzername und Passwort dürfen nicht leer sein.';
          this.resetErrorMessage();
        } else {
          // Überprüfe Benutzername und Passwort
          // Wenn ungültig:
          this.errorMessage = 'Ungültiger Benutzername oder Passwort.';
          this.resetErrorMessage();
        }
      }
    );
  }
  resetErrorMessage() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 2000); // 2000 Millisekunden = 2 Sekunden
  }
}
