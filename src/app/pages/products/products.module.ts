import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ProductsRoutingModule,
  ProductsComponents
} from "./products-routing.module";

import { ComponentsModule } from "../..//components/components.module";

@NgModule({
  imports: [CommonModule, ProductsRoutingModule, ComponentsModule],
  declarations: ProductsComponents
})
export class ProductsModule {}
