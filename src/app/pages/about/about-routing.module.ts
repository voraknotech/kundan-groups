import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { KgAboutComponent } from "./";

const routes: Routes = [
  { path: "", component: KgAboutComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}

export const AboutComponents = [KgAboutComponent];
