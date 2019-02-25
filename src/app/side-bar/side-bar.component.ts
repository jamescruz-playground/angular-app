import { Component, OnInit, Input } from '@angular/core';
import { NavigationModel } from '../navigation.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  @Input('lists') lists: NavigationModel[];

  constructor() { }

  ngOnInit() {
  }

}
