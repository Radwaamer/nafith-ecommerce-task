import { TProduct } from "@customTypes/product";
import GetAxios from "@functions/GetAxios";

const actGetProducts = GetAxios<TProduct[]>("products/actGetProducts","https://fakestoreapi.com/products")

export default actGetProducts;