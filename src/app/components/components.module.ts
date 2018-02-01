import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DownloaderComponent } from "./index";

@NgModule({
  imports: [CommonModule],
  declarations: [DownloaderComponent],
  providers: [],
  exports: [DownloaderComponent]
})
export class ComponentsModule {}
