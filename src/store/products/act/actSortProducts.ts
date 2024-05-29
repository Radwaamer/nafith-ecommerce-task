import { TProduct } from "@customTypes/product";
import GetAxios from "@functions/GetAxios";

const actSortProducts = GetAxios<TProduct[]>("products/actSortProducts",`https://fakestoreapi.com/products?sort=`)

export default actSortProducts;