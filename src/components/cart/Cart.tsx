import Counter from "@components/counter/Counter"
import { TProduct } from "@customTypes/product"
import Trash from '@assets/svg/trash.svg?react';
import Button from "@components/button/Button";
import { useAppDispatch } from "@store/hooks";
import { deleteItem } from "@store/cart/cartSlice";

const Cart = ({product}) => {

    const dispatch = useAppDispatch();

    return (
        <div className="grid items-center md:grid-cols-3 lg:grid-cols-4 shadow-md p-4 mb-8 gap-16">
            <div className="md:col-span-1 w-40">
                <img src={product.image} alt="" />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-semibold mb-3">{product.title}</h2>
                <p>{product.description}</p>
                <span className="mr-auto block w-fit bg-gray-600 font-semibold py-1 rounded-md mt-4 text-white px-3">{product.price}LE</span>
                <div className="flex justify-between items-center">
                    <div className="lg:w-1/4 md:w-1/2 sm:w-3/4 py-8">
                        <Counter />
                    </div>
                    <div onClick={()=>dispatch(deleteItem(product))} className=" scale-50">
                        <Button><Trash /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart