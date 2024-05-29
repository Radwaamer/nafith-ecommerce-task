import ascending from '@assets/icons/ascending.png';
import descending from '@assets/icons/descending.png';
import { useState } from 'react';
import actGetCategories from '@store/categories/act/actGetCategories';
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actSortProducts from '@store/products/act/actSortProducts';
import { addFilter, deleteFilter } from '@store/filter/filterSlice';

const SideBar = () => {

    const [filterActive, setFilterActive]=useState(false);
    const [sortMode, setSortMode] = useState("desc");

    const dispatch = useAppDispatch();
    const { categoriesRecords } = useAppSelector(
        (state) => state.categoriesSlice
    );

    useEffect(() => {
        if (!categoriesRecords.length) {
        dispatch(actGetCategories());
        }
    }, [dispatch, categoriesRecords]);


    const categoriesList =
    categoriesRecords.length > 0
        ? categoriesRecords.map((record,index) => (
            <li key={index} className='flex items-center gap-2 my-3'>
                <input onChange={(e)=>{e.target.checked?dispatch(addFilter(record)):dispatch(deleteFilter(record))}}
                className='scale-125 leading-none' type="checkbox" name={record} id={record}/>
                <label className='text-lg capitalize' htmlFor={record}>{record}</label>
            </li>
            ))
        : "there are no Categories";

    return (
        <aside className="h-full border px-4 rounded-md py-8">
            <div className="flex justify-between items-center gap-4 font-semibold">
                <h3 className="text-lg">Sort</h3>
                <img onClick={()=>{
                    setSortMode(sortMode=="asc"?"desc":"asc");
                    dispatch(actSortProducts(sortMode));
                }}
                className='w-5 cursor-pointer hover:animate-bounce transition' src={sortMode=="asc"?ascending:descending} alt="" />
            </div>
            <hr  className="my-4"/>
            <div className="flex justify-between items-center gap-4 font-semibold">
                <h3 className="text-lg">Filter</h3>
                <span onClick={()=>setFilterActive(!filterActive)} className="text-2xl cursor-pointer text-gray-600 transition">
                    {filterActive?"-":"+"}
                </span>
            </div>
            <ul className={`pl-4 ${filterActive?'hidden':'block'} transition`}>
                {categoriesList}
            </ul>
        </aside>
    )
}

export default SideBar;