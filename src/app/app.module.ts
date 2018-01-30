import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { Router } from "@angular/router";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";

import { AppComponent, KgHeaderComponent, KgFooterComponent } from "./";
import { DownloadComponent } from "./components/DownloadDriveComponent/download.component";


@NgModule({
  declarations: [AppComponent, KgHeaderComponent, KgFooterComponent, DownloadComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "kundan-groups" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    PagesModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
