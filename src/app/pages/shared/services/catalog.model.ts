export interface Product {
  sku: string;
  category: string;
  brand: string;
  name: string;
  description: string;

  color?: string;
  price?: number;
}

export interface Brand {
  name: string;
  description: string;
}

export interface Catalog {
  products: Product[];
  brands: Brand[];
}
