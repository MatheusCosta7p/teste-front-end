export interface IProduct {
  productName: string,
  descriptionShort: string,
  photo : string,
  price: number
}

export interface IProductsResponse {
  success: boolean;
  products: IProduct[];
}
