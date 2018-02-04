import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import "rxjs/add/operator/switchMap";
import { ObservableInput } from "rxjs/Observable";

import { Product } from "../services/catalog.model";
import { CatalogService } from "../services/catalog.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "kg-product-details",
  templateUrl: "product-details.component.html",
  styleUrls: ["product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  brand: string;

  private queryParamsSubscription: Subscription;
  private routeParamSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    public catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(params => {
      this.brand = params["brand"];
    });

    this.routeParamSubscription = this.route.paramMap
      .switchMap((params: ParamMap): Observable<any> => {
        return this.catalogService.getProductDetail(params.get("sku"));
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
  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
}
