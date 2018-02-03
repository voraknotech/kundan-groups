import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";

import {
  ProductsRoutingModule,
  ProductsComponents
} from "./products-routing.module";

import { CatalogService } from "./";

import { ComponentsModule } from "../..//components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  declarations: ProductsComponents,
  providers: [CatalogService]
})
export class ProductsModule {}
