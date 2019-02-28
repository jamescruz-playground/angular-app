import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {NavigationModel} from '../model/navigation.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    @Inject('NavigationModels') public navigation: NavigationModel[]) {
  }
}
