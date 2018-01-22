import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { KgAboutUsComponent, KgContactUsComponent, PageNotFoundComponent } from './pages/index'

const routes: Routes = [
  {
    path: "home",
    redirectTo: "",
  },
  {
    path: "aboutus",
    component: KgAboutUsComponent,
  },
  {
    path: "contactus",
    component: KgContactUsComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
