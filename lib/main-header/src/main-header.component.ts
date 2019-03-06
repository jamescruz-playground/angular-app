import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['../../../src/app/app.component.css']
})
export class MainHeaderComponent implements OnInit {
  // isScrolled: boolean;
  scrolledClass: string;

  ngOnInit() {
  }

  // @HostListener('window:scroll', [])
  // onScroll() {
  //     this.isScrolled = (window.scrollY > 0);
  // }

  @HostListener('window:scroll', [])
  onScroll() {
      this.scrolledClass = (window.scrollY > 0) ? 'box-shadow' : '';
  }
}