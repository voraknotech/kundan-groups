import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
  { path: "contact", loadChildren: "./contact/contact.module#ContactModule" },
  { path: "products", loadChildren: "./products/products.module#ProductsModule" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class PagesRoutingModule { }