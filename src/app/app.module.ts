import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { Router } from "@angular/router";
import { AgmCoreModule } from "@agm/core";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";

import { AppComponent, KgHeaderComponent, KgFooterComponent } from "./";
import { DownloaderComponent } from "./components/vt-downloader/vt-downloader.component";
import { KgScrollTopComponent } from "./components/sroll-top/scroll-top.component";
import { WINDOW_PROVIDERS, WINDOW } from "./components/sroll-top/window.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    KgHeaderComponent,
    KgFooterComponent,
    KgScrollTopComponent
    // DownloaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "kundan-groups" }),
    NgbModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    ComponentsModule,
    PagesModule,
    SharedModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCkIS7OXlpM-qqYwtb3pvAvfmxr--DvCYU"
    }),
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) { }
}
