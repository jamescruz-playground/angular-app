import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarItemComponent } from './side-bar/side-bar-item.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DataAndPersonalizationComponent } from './data-and-personalization/data-and-personalization.component';

import { NavigationModel } from '../model/navigation.model';
import {ContentBoxModule} from "../../lib/content-box";
import { MatButtonModule, MatCardModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const navigation: NavigationModel[] = [
    {icon: '/assets/ico/home.png', activeicon: '/assets/ico/home-active.png', label: 'Home', name: 'Root', path: 'home', component: HomeComponent },
    {icon: '/assets/ico/person.png', activeicon: '/assets/ico/person-active.png', label: 'Personal Info', name: 'PersonalInfo', path: 'personal_info', component: PersonalInfoComponent },
    {icon: '/assets/ico/data.png', activeicon: '/assets/ico/data-active.png', label: 'Data & Personalization', name: 'DataAndPersonalization', path: 'data_and_personalization', component: DataAndPersonalizationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContentBoxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'NavigationModels', useValue: navigation }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
