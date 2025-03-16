import axios from "axios";
import { IProductsResponse } from "src/types/product.type";

const PRODUCTS_JSON_URL = "/teste-front-end/src/data/data.json";


export const fetchProducts = async () : Promise<IProductsResponse> => {
  const response = await axios.get(PRODUCTS_JSON_URL);
  return response.data;
}
