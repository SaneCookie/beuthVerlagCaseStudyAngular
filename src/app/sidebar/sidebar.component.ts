import { Component } from '@angular/core';
import { Router, NavigationStart, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {
    router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationStart))
      .subscribe((event: RouterEvent) => {
        if (event instanceof NavigationStart) {
          if (event.url === '/about') {
            window.open('https://www.dinmedia.de/de', '_blank');
          } else if (event.url === '/contact') {
            window.open(
              'https://support.dinmedia.de/de/support/solutions/articles/80000943954-rufen-sie-uns-an-',
              '_blank'
            );
          }
        }
      });
  }
}
