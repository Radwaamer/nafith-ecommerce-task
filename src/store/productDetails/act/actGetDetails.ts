import GetAxios from "@functions/GetAxios";

const actGetDetails = GetAxios<string[]>("details/actGetDetails",'https://fakestoreapi.com/products/')

export default actGetDetails;