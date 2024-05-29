import Counter from "@components/counter/Counter"
import { TProduct } from "@customTypes/product"

const Cart = ({image,title,description,price}:TProduct) => {
    return (
        <div className="grid items-center md:grid-cols-3 lg:grid-cols-4 shadow-md p-4 mb-8 gap-16">
            <div className="md:col-span-1 w-40">
                <img src={image} alt="" />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                <p>{description}</p>
                <span className="mr-auto block w-fit bg-gray-600 font-semibold py-1 rounded-md mt-4 text-white px-3">{price}LE</span>
                <div className="lg:w-1/4 md:w-1/2 sm:w-3/4 py-8">
                    <Counter />
                </div>
            </div>
        </div>
    )
}

export default Cart