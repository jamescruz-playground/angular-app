import {Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationModel} from '../model/navigation.model';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ProgressAnimationEnd} from "@angular/material/progress-bar";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Input() progressbar: MatProgressBarModule;
  @Output() animationEnd: EventEmitter<ProgressAnimationEnd>;

  constructor(
    private router: Router,
    @Inject('NavigationModels') public navigation: NavigationModel[]) {
  }
}
