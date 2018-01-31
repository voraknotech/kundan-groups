import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  GlobalErrorHandlerService,
  GoogleAnalyticsService,
  KgBasicServices
} from "./";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    GoogleAnalyticsService,
    KgBasicServices
  ],
  exports: []
})
export class SharedModule {}
