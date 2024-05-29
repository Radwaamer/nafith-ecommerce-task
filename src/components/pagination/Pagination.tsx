import SmallBtn from "@components/smallBtn/SmallBtn";
import { useAppSelector } from "@store/hooks";
import { Link, NavLink } from 'react-router-dom';

const Pagination = () => {

    const { records, productsPerPage } = useAppSelector(
        (state) => state.productsSlice
    );

    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(records.length / productsPerPage); i++) {
        paginationNumbers.push(i);
    }

    const PaginationList =
    paginationNumbers.length > 0
    ? paginationNumbers.map((num) => (
        <NavLink onClick={()=>{window.scrollTo({top: 0, behavior:"smooth"});}} key={num} to={`/products/${num}`}>
            <SmallBtn>{num}</SmallBtn>
        </NavLink>
    ))
    : "";

    return (
        <div className="flex justify-center items-center gap-4 pb-4 pt-12">{PaginationList}</div>
    )
}

export default Pagination