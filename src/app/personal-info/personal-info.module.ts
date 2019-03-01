import { NgModule } from "@angular/core";
import { PersonalInfoRoutingModule } from "./personal-info-routing.module";
import { PersonalInfoComponent } from "./personal-info.component";

@NgModule({
    imports: [PersonalInfoRoutingModule],
    declarations: [PersonalInfoComponent],
    providers: []
})
export class PersonalInfoModule {

}

