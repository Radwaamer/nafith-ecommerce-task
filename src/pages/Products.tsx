import SideBar from "@components/common/sideBar/SideBar";
import Pagination from "@components/pagination/Pagination";
import ProductBox from "@components/product/ProductBox";
import SearchForm from "@components/search/SearchForm";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actFilterProducts from "@store/products/act/actFilterProducts";
import actGetProducts from "@store/products/act/actGetProducts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
    const params=useParams()

    const dispatch = useAppDispatch();
    const {records, productsPerPage } = useAppSelector(
        (state) => state.productsSlice
    );
    const {filterRecords } = useAppSelector(
        (state) => state.filterSlice
    );

    useEffect(() => {
        if (!records.length && !filterRecords.length ) {
            dispatch(actGetProducts());
        }
        // if(filterRecords.length){
        //     dispatch(actFilterProducts(filterRecords))
        // }
    }, [dispatch, records, filterRecords]);

    const calcProducts= ()=>{
        const listProducts=[]
        if(typeof(params.page)=="string" && records.length > 0){
            for(let i=((+params.page)*productsPerPage)-productsPerPage;i<(+params.page)*productsPerPage;i++){
                if(i>records.length-1){
                    break;
                }
                listProducts.push(<ProductBox key={records[i].id} product={records[i]}/>)
            }
            return listProducts;
        }else{
            return "there are no Products"
        }
    }

    return (
        <section className="grid grid-cols-3 md:grid-cols-4">
            <div className="col-span-1">
                <SideBar />
            </div>
            <div className="container col-span-2 md:col-span-3">
                <SearchForm />
                <h1 className="text-4xl text-center my-9">Our Products</h1>
                <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {calcProducts()}
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export default Products;