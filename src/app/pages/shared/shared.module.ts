import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { Catalog, CatalogService, Product, ProductDetailsComponent } from "./";

import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [CommonModule, RouterModule, ComponentsModule],
  declarations: [ProductDetailsComponent],
  providers: [CatalogService],
  exports: []
})
export class SharedModule {}
