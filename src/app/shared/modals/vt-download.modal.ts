export class DownloadFileDetail {
    fileUrl: string;
    fileTitle: string;
    style: string;

    constructor(url: string, title: string, cssClass?: string) {
        this.fileUrl = url;
        this.fileTitle = title;
        this.style = cssClass;
    }
}
