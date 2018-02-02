import { Component, HostListener, Inject, NgModule, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW_PROVIDERS, WINDOW } from "./window.service";
@Component({
    selector: "kg-scroll-top",
    templateUrl: "scroll-top.component.html",
    styleUrls: ["scroll-top.component.css"]
})
export class KgScrollTopComponent implements OnInit {
    private scrollTop: boolean;
    constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(WINDOW) private window: Window
    ) { }

    ngOnInit() {
        this.scrollFunction();
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (offset >= 200) {
            this.scrollTop = true;
        }
        else {
            this.scrollTop = false;
        }
    }
    scrollFunction() {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
}
