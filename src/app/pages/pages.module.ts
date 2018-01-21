import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { KgMainPageComponent } from "./";

@NgModule({
    imports: [CommonModule],
    declarations: [KgMainPageComponent],
    providers: [],
    exports: [KgMainPageComponent]
})
export class PageModule { }
