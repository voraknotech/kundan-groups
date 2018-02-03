export interface Product {
  sku: string;
  category: string;
  brand: string;
  name: string;
  description: string;

  color?: string;
  price?: number;
}

export interface Catalog {
  products: Product[];
}
