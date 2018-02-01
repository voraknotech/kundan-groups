import { Component, Input } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "vt-downloader",
  templateUrl: "vt-downloader.component.html"
})
export class DownloaderComponent implements OnInit {
  @Input() fileDetails: Array<any>;

  constructor() {}

  ngOnInit() {
    this.createDownloadLinks();
  }

  private createDownloadLinks(): void {
    const downloadKeyword = "export=download";
    for (let i = 0; i < this.fileDetails.length; i++) {
      const n = this.fileDetails[i].url.search(downloadKeyword);
      if (n < 1) {
        this.fileDetails[i].url = this.fileDetails[i].url.replace(
          /open/i,
          "uc"
        );
        this.fileDetails[i].url = this.fileDetails[i].url.concat(
          "&export=download"
        );
      }
    }
  }
}
