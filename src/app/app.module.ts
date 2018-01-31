import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { Router } from "@angular/router";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";

import { AppComponent, KgHeaderComponent, KgFooterComponent } from "./";
import { DownloaderComponent } from "./components/vt-downloader/vt-downloader.component";

@NgModule({
  declarations: [
    AppComponent,
    KgHeaderComponent,
    KgFooterComponent,
    // DownloaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "kundan-groups" }),
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    ComponentsModule,
    PagesModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) { }
}
