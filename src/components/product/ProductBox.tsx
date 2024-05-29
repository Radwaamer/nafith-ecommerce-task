import Button from "@components/button/Button"
import { Link } from 'react-router-dom';
import Cart from '@assets/svg/cart.svg?react';
import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import { addItem, deleteItem } from "@store/cart/cartSlice";
import { getItemInfo } from "@store/productDetails/productDetailsSlice";

const ProductBox = ({product}) => {
    const dispatch = useAppDispatch();

    const [addCart,setAddCart]=useState(false);

    return (
        <div className="shadow-lg p-3 pb-4">
            <Link onClick={()=>{
                    dispatch(getItemInfo(product));
                }} to={`${product.id}`}><img className="w-full h-80 md:h-52 hover:animate-pulse" src={product.image} alt="" /></Link>
            <div className='text-center my-4 pt-4 border-t-2'>
                <p className="font-bold mb-3 text-nowrap overflow-ellipsis overflow-hidden">{product.title}</p>
                <span className="text-gray-600 mb-4 block">{product.price} EGP</span>
                <button onClick={()=>{
                    setAddCart(!addCart)
                    !addCart?dispatch(addItem(product)):dispatch(deleteItem(product));
                }
                } className={`${addCart?"opacity-50":""}`}><Cart /></button>
                <Link onClick={()=>{
                    dispatch(getItemInfo(product));
                }} to={`${product.id}`}><Button>More details</Button></Link>
            </div>
        </div>
    )
}

export default ProductBox;