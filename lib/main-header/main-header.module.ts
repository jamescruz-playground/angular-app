import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainHeaderComponent} from './src/main-header.component';


export const CONTENT_BOX_DECLARATIONS = [MainHeaderComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CONTENT_BOX_DECLARATIONS],
  exports: [
    CONTENT_BOX_DECLARATIONS
  ]
})
export class MainHeaderModule { }
