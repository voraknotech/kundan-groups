import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { KgContactComponent } from "./";

const routes: Routes = [
  { path: "", component: KgContactComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}

export const ContactComponents = [KgContactComponent];
