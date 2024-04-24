import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthResolverService implements Resolve<boolean> {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const isLoggedIn = this.authService.isLoggedIn();

    if (!isLoggedIn) {
      // If user is not logged in, redirect to login page
      this.router.navigate(['/login']);
    }

    // Return observable of isLoggedIn status
    return of(isLoggedIn);
  }
}
