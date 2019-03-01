import { NgModule } from "@angular/core";
import { DataAndPersonalizationRoutingModule } from "./data-and-personalization-routing.module";
import { DataAndPersonalizationComponent } from "./data-and-personalization.component";
import { ContentBoxModule } from "../../../lib/content-box";

@NgModule({
    imports: [DataAndPersonalizationRoutingModule, ContentBoxModule],
    declarations: [DataAndPersonalizationComponent],
    providers: []
})
export class DataAndPersonalizationModule {

}