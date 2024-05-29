import Search from '@assets/svg/search.svg?react';
const SearchForm = () => {
    return (
        <div className='relative'>
            <input className='border-2 outline-none rounded-md pl-2 py-1 pr-8 w-full lg:w-1/2 mx-auto block' type="text" />
            <Search className="w-6 absolute top-1/2 right-0 lg:right-1/4 -translate-y-1/2 mr-2 cursor-pointer"/>
        </div>
    )
}

export default SearchForm