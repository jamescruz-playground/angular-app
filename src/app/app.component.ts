import {Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {NavigationModel} from '../model/navigation.model';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {ProgressAnimationEnd} from "@angular/material/progress-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // // @Input() progressbar: MatProgressBarModule;
  // @Output() animationEnd: EventEmitter<ProgressAnimationEnd>;
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