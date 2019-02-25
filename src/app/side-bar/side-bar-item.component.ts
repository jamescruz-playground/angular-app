import { Component, OnInit, Input } from '@angular/core';
import { NavigationModel } from '../navigation.model';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

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
