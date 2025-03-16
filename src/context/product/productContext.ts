import { createContext } from "react";
import { IProduct } from "src/types/product.type";

export interface IProductContextType {
  products: IProduct[] | null;
  isLoading: boolean;
  error: string | null;
}

export const ProductContext = createContext<IProductContextType | undefined>(undefined);