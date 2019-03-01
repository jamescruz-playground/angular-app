import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DataAndPersonalizationComponent } from "./data-and-personalization.component";

const routes: Routes = [
    { path: '', component: DataAndPersonalizationComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DataAndPersonalizationRoutingModule { }