import { Component, Input } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "kg-download",
  templateUrl: "download.component.html"
})
export class DownloadComponent implements OnInit {
    @Input() downloadLinks: Array<string>;
    @Input() downloadTitle: Array<number>;
    private cssClass = "btn btn-primary";
    constructor() {}

    ngOnInit() {
        console.log(this.downloadLinks);
        this.createDownloadLinks();
    }

    private createDownloadLinks(): void {
        const downloadKeyword = "export=download";

        for (let i = 0; i < this.downloadLinks.length; i++) {
            const n = this.downloadLinks[i].search(downloadKeyword);
            console.log(n);
            if (n < 1) {
                this.downloadLinks[i] = this.downloadLinks[i].replace(/open/i, "uc");
                this.downloadLinks[i] = this.downloadLinks[i].concat("&export=download");
            }

        }

    }
}
