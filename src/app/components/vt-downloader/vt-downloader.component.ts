import { Component, Input, OnInit } from "@angular/core";
import { DownloadFileDetail } from "../../shared/";

@Component({
    selector: "vt-downloader",
    templateUrl: "vt-downloader.component.html",
    styleUrls: ["vt-downloader.component.css"]
})
export class DownloaderComponent implements OnInit {

    @Input() fileDetails: Array<DownloadFileDetail>;
    constructor() { }

    ngOnInit() {
        this.createDownloadLinks();
    }

    private createDownloadLinks(): void {
        const downloadKeyword = "export=download";
        for (let i = 0; i < this.fileDetails.length; i++) {
            const n = this.fileDetails[i].fileUrl.search(downloadKeyword);
            if (n < 1) {
                this.fileDetails[i].fileUrl = this.fileDetails[i].fileUrl.replace(/open/i, "uc");
                this.fileDetails[i].fileUrl = this.fileDetails[i].fileUrl.concat("&export=download");
            }
        }
    }

}
