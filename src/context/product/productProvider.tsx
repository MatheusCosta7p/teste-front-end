import React, { ReactNode } from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../../api/product";
import { ProductContext } from "./productContext";


interface IProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  const { data, isLoading, error } = useQuery("products", fetchProducts);

  return(
    <ProductContext.Provider value={{ 
      products : data?.products || null, 
      isLoading, 
      error: error instanceof Error ? error.message : null
      }}>
        {children}
    </ProductContext.Provider>
  )
}
