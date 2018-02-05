import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from "@agm/core";

import {
  ContactRoutingModule,
  ContactComponents
} from "./contact-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCkIS7OXlpM-qqYwtb3pvAvfmxr--DvCYU"
    })
  ],
  declarations: ContactComponents
})
export class ContactModule { }
