import Cart from '@components/cart/Cart'
import { useAppSelector } from '@store/hooks';

const Carts = () => {
    const { cartRecords } = useAppSelector(
        (state) => state.cartSlice
    );

    const cartsList=cartRecords.length!=0?
    cartRecords.map(record=>{
        return(
            <Cart key={record.id} {...record}/>
        )
    })
    :"There Are No Products Yet"

    return (
        <section>
            <div className="container">
                {cartsList}
            </div>
        </section>
    )
}

export default Carts