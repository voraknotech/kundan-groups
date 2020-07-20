import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DownloadFileDetail } from "../../../shared";
import { CatalogService, Catalog, Product } from "../../shared/";
import { Subscription } from "rxjs";

@Component({
  selector: "kg-product1",
  templateUrl: "kg-product1.component.html",
  styleUrls: ["kg-product1.component.css"]
})
export class KgProduct1Component implements OnInit, OnDestroy {
  products: Product[];
  fileDetails: Array<any>;

  brand: string;

  private queryParamsSubscription: Subscription;
  private catalogServiceSubscription: Subscription;

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.brand = params["brand"];

      if (this.brand) {
        this.catalogServiceSubscription = this.catalogService
          .getProductsByBrand(this.brand)
          .subscribe((products: Product[]) => {
            this.products = products;
          });
        return;
      }

      this.catalogServiceSubscription = this.catalogService
        .getCatalog()
        .subscribe((catalog: Catalog) => {
          this.products = catalog.products;
        });
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

  ngOnDestroy() {
    this.catalogServiceSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
}
