import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { KgProduct1Component } from "./";

import { ProductDetailsComponent } from "../shared";

const routes: Routes = [
  { path: "", component: KgProduct1Component, pathMatch: "full" },
  {
    path: ":sku",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}

export const ProductsComponents = [KgProduct1Component];
