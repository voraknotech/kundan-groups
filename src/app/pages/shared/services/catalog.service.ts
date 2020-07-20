import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Catalog } from "./catalog.model";
import { Observable } from "rxjs";

@Injectable()
export class CatalogService {
  constructor(private httpClient: HttpClient) {}

  getCatalog(): Observable<any> {
    return this.httpClient.get("./assets/catalog/index.json");
  }

  getProductsByBrand(brand: string): Observable<any> {
    return this.httpClient.get(
      `./assets/catalog/branded-products/${brand}.json`
    );
  }

  getProductDetail(sku: string): Observable<any> {
    return this.httpClient.get(`./assets/catalog/products/${sku}.json`);
  }
}
