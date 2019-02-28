import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentBoxComponent} from './src/content-box.component';


export const CONTENT_BOX_DECLARATIONS = [ContentBoxComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CONTENT_BOX_DECLARATIONS],
  exports: [
    CONTENT_BOX_DECLARATIONS
  ]
})
export class ContentBoxModule { }
