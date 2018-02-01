import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ProductsRoutingModule,
  ProductsComponents
} from "./products-routing.module";

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: ProductsComponents
})
export class ProductsModule {}
