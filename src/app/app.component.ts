import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsService } from "./shared/";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import { DownloadFileDetail } from "./shared/";

declare var ga;

@Component({
  selector: "kg-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  fileDetails: Array<any>;
  private loadingFlag: boolean;

  constructor(
    public router: Router,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {
    this.router.events.subscribe(event => {
      this.loadingFlag = true;
      if (event instanceof NavigationEnd) {
        this.googleAnalyticsService.emitPageEvent(event);
        Observable.interval(3000).subscribe(() => this.loadingFlag = false);
      }
    });
  }

  ngOnInit() {
    this.fileDetails = [
      new DownloadFileDetail(
        "https://drive.google.com/open?id=1d-C8JMkPVzucekBHUEUVKbsmDSp2yE5C",
        "Padlocks_Freedom",
        "btn btn-primary"
      ),
      new DownloadFileDetail(
        "https://drive.google.com/open?id=1aiX7zrjQzX0FXG9J8ExCGZ4cTHRMvfR2",
        "Padlocks_Kadi-Tala_6levers",
        "btn btn-dark"
      ),
      new DownloadFileDetail(
        "https://drive.google.com/open?id=1pZPeT5Au_lTpdNJqcrBnoz5SflAygOsB",
        "Padlocks_Myloc_SmallWonderSeries",
        "btn btn-light"
      ),
      new DownloadFileDetail(
        "https://drive.google.com/open?id=1kH1FivzOcbtOOrThi9-h5CTwuX9gk-sx",
        "Padlocks_Navtal",
        "btn btn-danger"
      ),
      new DownloadFileDetail(
        "https://drive.google.com/open?id=1MONe2UH_6F1hLuICLM5c2knROBy0B4Tn",
        "Padlocks_SherlockSolidBrass"
      ),
      new DownloadFileDetail(
        "https://drive.google.com/open?id=1isXSiu_OZNHPISqNS9S7w5IgjAgcov8Y",
        "Rakshak",
         null
      )
    ];
  }
}
