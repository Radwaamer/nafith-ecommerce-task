import Cart from '@assets/svg/cart.svg?react'
import { useAppSelector } from '@store/hooks';
import { Link } from 'react-router-dom'
const Header = () => {

    const { cartRecords } = useAppSelector(
        (state) => state.cartSlice
    );

    return (
        <header className='py-8 shadow-md'>
            <div className="container flex justify-between items-center">
                <Link to={"products/1"}><h1 className='tracking-widest text-4xl font-semibold'><span className="bg-blue-600 text-white p-1 rounded-xl">NAF</span>ITH</h1></Link>
                <Link to={"/shopping-cart"} className='relative'>
                    <span className='absolute top-0 right-0 translate-x-[47%] -translate-y-[83%] bg-blue-600 text-white rounded-full py-1 px-2 text-xs'>{cartRecords.length}</span>
                    <Cart />
                </Link>
            </div>
        </header>
    )
}

export default Header