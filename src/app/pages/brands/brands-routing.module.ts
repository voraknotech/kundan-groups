import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BrandsComponent } from "./";

import { ProductDetailsComponent } from "../shared";

const routes: Routes = [
  { path: "", component: BrandsComponent, pathMatch: "full" },
  {
    path: "products",
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  },{
    path: ":link",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule {}

export const BrandsComponents = [BrandsComponent];
