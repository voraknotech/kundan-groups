import { Component, OnInit } from "@angular/core";
import { DownloadFileDetail } from "../../../shared";

import { CatalogService, Catalog } from "../../shared";

@Component({
  selector: "kg-brands",
  templateUrl: "brands.component.html",
  styleUrls: ["brands.component.css"]
})
export class BrandsComponent implements OnInit {
  catalog: Catalog;
  fileDetails: Array<any>;

  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.readCatalog().subscribe((catalog: Catalog) => {
      this.catalog = catalog;
    });

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
