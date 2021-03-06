import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import {
  ProductsRoutingModule,
  ProductsComponents
} from "./products-routing.module";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: ProductsComponents,
  providers: []
})
export class ProductsModule {}
