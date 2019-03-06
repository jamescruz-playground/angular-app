import {Component, OnInit, Input, HostListener} from '@angular/core';
import { NavigationModel } from '../../model/navigation.model';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

const TABLET_SCREEN_WIDTH = 1070;

@Component({
  selector: 'app-side-bar-item',
  templateUrl: './side-bar-item.component.html',
  styleUrls: ['../app.component.css']
})
export class SideBarItemComponent implements OnInit {
  @Input('list') list: NavigationModel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  isActive(): boolean {
    return `/${this.list.path}` === this.location.path();
  }

  ngOnInit() {
  }
}
