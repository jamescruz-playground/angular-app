import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import { ContentBoxProperties } from "./content-box.properties";

const TABLET_SCREEN_WIDTH = 1070;
const TABLET_SCREEN_WIDTH_B = 1023;
const MOBILE_SCREEN_WIDTH = 742;
const MOBILE_SCREEN_WIDTH_B = 600;

@Component({
  selector: 'content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['../../../src/app/app.component.css']
})
export class ContentBoxComponent implements OnInit {
  @Input() public content: ContentBoxProperties;
  @ViewChild('box') box;
  xlicon: boolean;
  ricon: boolean;

  ngOnInit() {
      this.xlicon = false;
      this.ricon = true;
      this.onResize();
  }

  @HostListener('window:resize', [])
  onResize() {
      console.log(Math.ceil(this.box.nativeElement.clientWidth / window.innerWidth * 100)) ;
      if ((window.innerWidth <= TABLET_SCREEN_WIDTH && window.innerWidth >= TABLET_SCREEN_WIDTH_B ) || (window.innerWidth <= MOBILE_SCREEN_WIDTH && window.innerWidth >= MOBILE_SCREEN_WIDTH_B)) {
          this.ricon = false;
          this.xlicon = true;
      } else {
          this.ricon = true;
          this.xlicon = false;
      }
  }
}