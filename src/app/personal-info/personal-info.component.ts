import { Component, OnInit } from '@angular/core';
import { FocusedImage } from "image-focus";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['../app.component.css','./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
      const focusedImageElements = document.querySelectorAll('.focused-image') as NodeListOf<HTMLImageElement>;
      const focusedImages: FocusedImage[] = [];
      Array.prototype.forEach.call(focusedImageElements, (imageEl: HTMLImageElement) => {
          focusedImages.push(
              new FocusedImage(imageEl, {
                  debounceTime: 17,
                  updateOnWindowResize: true,
              })
          );
      });
  }

}
