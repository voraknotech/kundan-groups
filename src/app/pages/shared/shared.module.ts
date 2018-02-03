import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Catalog, CatalogService, Product, ProductDetailsComponent } from "./";

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [ProductDetailsComponent],
  providers: [CatalogService],
  exports: []
})
export class SharedModule {}
