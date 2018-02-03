export interface Product {
  sku: string;
  name: string;
  description: string;
  category: string;

  color?: string;
  price?: number;
}

export interface Catalog {
  products: Product[];
}
