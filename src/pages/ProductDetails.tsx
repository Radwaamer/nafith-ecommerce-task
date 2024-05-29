import Counter from "@components/counter/Counter";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetDetails from "@store/productDetails/act/actGetDetails";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {

    const params=useParams();

    const dispatch = useAppDispatch();

    const { detailsRecords } = useAppSelector(
        (state) => state.productDetailsSlice
    );

    useEffect(() => {
        if (detailsRecords.title=="") {
        dispatch(actGetDetails(params.productID));
        }
    }, [dispatch, detailsRecords]);

    return (
        <section>
            <div className='container grid md:grid-cols-2 lg:grid-cols-3 items-center lg:gap-24 gap-8 justify-center md:justify-around'>
                <div className="w-full max-w-48">
                    <img src={detailsRecords.image} alt="" />
                </div>
                <div className='lg:col-span-2'>
                    <h2 className="text-4xl font-semibold mb-8">{detailsRecords.title}</h2>
                    <p className='text-lg'>{detailsRecords.description}</p>
                    <span className="mr-auto block w-fit bg-gray-600 font-bold py-2 rounded-md mt-6 text-white px-4">
                        {detailsRecords.price}LE
                    </span>
                    <div className="md:w-1/2 py-12">
                        <Counter />
                    </div>
                    <div className="flex gap-6">
                        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold" 
                        onClick={()=>history.back()}>Continue Shopping</button>
                        <Link to={"/shopping-cart"}>
                            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold">Check Shopping Cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails