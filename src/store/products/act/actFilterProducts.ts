import { TProduct } from "@customTypes/product";
import GetAxios from "@functions/GetAxios";

const actFilterProducts = GetAxios<TProduct[]>("products/actFilterProducts",'https://fakestoreapi.com/products/category/jewelery')

export default actFilterProducts;