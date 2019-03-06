import {Component, Inject} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {NavigationModel} from '../model/navigation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;

  constructor(
    private router: Router,
    @Inject('NavigationModels') public navigation: NavigationModel[]) {

    this.router.events.subscribe((event: Event) => {
      switch(true) {
          case event instanceof NavigationStart:
            this.loading = true;
            break;
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:
            this.loading = false;
            break;
      }
    });
  }
}