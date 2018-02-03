import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { BrandsRoutingModule, BrandsComponents } from "./brands-routing.module";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    BrandsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: BrandsComponents,
  providers: []
})
export class BrandsModule {}
