import {Component, HostListener, OnInit} from '@angular/core';

const TABLET_SCREEN_WIDTH = 1070;
const TABLET_SCREEN_WIDTH_B = 1023;
const MOBILE_SCREEN_WIDTH = 742;
const MOBILE_SCREEN_WIDTH_B = 600;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
  xliconchecker: boolean;
  xlicon: boolean;
  ricon: boolean;
  screenHeight: any;
  screenWidth: any;

  constructor() {
    this.xlicon = false;
    this.ricon = true;
  }

  @HostListener('window:resize', ['$resizeEvent'])
  onResize(resizeEvent?) {
      // this.xliconchecker = window.innerWidth <= TABLET_SCREEN_WIDTH;
      if ((window.innerWidth <= TABLET_SCREEN_WIDTH && window.innerWidth >= TABLET_SCREEN_WIDTH_B ) || (window.innerWidth >= MOBILE_SCREEN_WIDTH_B && window.innerWidth <= MOBILE_SCREEN_WIDTH)) {
          this.ricon = false;
          this.xlicon = true;
      } else {
          this.ricon = true;
          this.xlicon = false;
      }
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
  }

  ngOnInit() {

  }


}
