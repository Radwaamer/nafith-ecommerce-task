import GetAxios from "@functions/GetAxios";

const actGetCategories = GetAxios<string[]>("categories/actGetCategories",'https://fakestoreapi.com/products/categories')

export default actGetCategories;