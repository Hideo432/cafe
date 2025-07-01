export interface Product {
  img: string;
  title: string;
  orderCount: number;
  category?: { first: string; second: string };
  description?: string;
  rating: number;
}
