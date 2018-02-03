import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { KgProduct1Component, ProductDetailsComponent } from "./";

const routes: Routes = [
  { path: "", component: KgProduct1Component, pathMatch: "full" },
  { path: ":category/:sku", component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}

export const ProductsComponents = [
  KgProduct1Component,
  ProductDetailsComponent
];
