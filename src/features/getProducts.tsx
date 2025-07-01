import { type Product } from "../types";
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/src/db/products.json");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const json: Product[] = await response.json();
    return json;
  } catch (error) {
    console.log(`Error: ${error}`);
    return [];
  }
};
