import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import "rxjs/add/operator/switchMap";
import { ObservableInput } from "rxjs/Observable";

import { Product } from "../services/catalog.model";
import { CatalogService } from "../services/catalog.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "kg-product-details",
  templateUrl: "product-details.component.html",
  styleUrls: ["product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  breadcrumb: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.breadcrumb = data.breadcrumb;
    });

    this.route.paramMap
      .switchMap((params: ParamMap): Observable<any> => {
        return this.catalogService.readProductDetail(
          params.get("category") ? "products" : "brands",
          params.get("category") || params.get("brands"),
          params.get("sku")
        );
      })
      .subscribe(
        (product: Product) => {
          this.product = product;
        },
        err => {
          console.log("404");
        }
      );
  }
}
