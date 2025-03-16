import { useContext } from "react";
import { IProductContextType, ProductContext } from "../context/product/productContext";

export const useProducts = (): IProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
