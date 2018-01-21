import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { PageModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";

import { KgMainPageComponent } from "./pages/kg-main/kg-main.component"

@NgModule({
  declarations: [AppComponent, KgMainPageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "kundan-groups" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
