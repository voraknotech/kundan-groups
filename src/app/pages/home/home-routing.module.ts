import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { KgHomeComponent } from "./";

const routes: Routes = [
  { path: "", component: KgHomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

export const HomeComponents = [KgHomeComponent];
