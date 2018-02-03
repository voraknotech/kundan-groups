import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Catalog } from "./catalog.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CatalogService {
  constructor(private httpClient: HttpClient) {}

  readCatalog(): Observable<any> {
    return this.httpClient.get("./assets/catalog/index.json");
  }

  readProductDetail(page: string, category: string, sku: string): Observable<any> {
    return this.httpClient.get(
      `./assets/catalog/${page}/${category}/${sku}.json`
    );
  }
}
