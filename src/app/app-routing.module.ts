import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'personal_info', loadChildren: './personal-info/personal-info.module#PersonalInfoModule', pathMatch: 'full' },
    { path: 'data_and_personalization', loadChildren: './data-and-personalization/data-and-personalization.module#DataAndPersonalizationModule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
