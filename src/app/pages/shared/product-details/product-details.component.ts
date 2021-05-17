
import { switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import "rxjs/add/operator/switchMap";
import { ObservableInput, Observable, Subscription } from "rxjs";

import { Product } from "../services/catalog.model";
import { CatalogService } from "../services/catalog.service";

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
  ) { }

  ngOnInit() {

    this.routeParamSubscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<any> => {
        return this.catalogService.getProductDetail(params.get("link"));
      }))
      .subscribe(
        (product: Product) => {
          this.product = product;
          console.log(product);
        },
        err => {
          console.log("404");
        }
      );
  }
  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }
}
