import { NgModule, ErrorHandler } from "@angular/core";
import { CommonModule } from "@angular/common";

import { KgMainPageComponent, KgAboutUsComponent, KgContactUsComponent, PageNotFoundComponent } from "./";

@NgModule({
    imports: [CommonModule],
    declarations: [
        KgMainPageComponent,
        KgAboutUsComponent,
        KgContactUsComponent,
        PageNotFoundComponent
    ],
    providers: [],
    exports: [
        KgMainPageComponent,
        KgAboutUsComponent,
        KgContactUsComponent,
        PageNotFoundComponent
    ]
})
export class PageModule { }
