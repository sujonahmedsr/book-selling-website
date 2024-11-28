// import { IoIosSearch } from "react-icons/io";
import { useBooksProductsApiQuery } from "../../RTK/Fearures/getBook/getBookApi";
import SingleBooks from "./SingleBooks";
import { useState } from "react";
import ProductSort from "./productSort";
import ShopByPublications from "./ShopByPublications";
import ShopByAuthors from "./ShopByAuthors";
import ShopBySubject from "./ShopBySubject";

const AllBooks = () => {
    const [search, setSearch] = useState('')

    // query passing to rtk query redux 
    const [filters, setFilters] = useState({
        sortFiltering: "",
        publication: "",
        authors: "",
        subject: ""
    });

    const { data: allBooks, isLoading, isError, error } = useBooksProductsApiQuery(filters)

    //   get sorting value from user 
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg font-semibold text-gray-700">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600">{error?.status}</div>
    }
    if (!isLoading && !isError && allBooks.data?.length === 0) {
        content = <div className="text-lg font-semibold text-gray-700">No Products Found...</div>
    }

    if (!isLoading && !isError && allBooks.data?.length > 0) {
        content = allBooks.data
            .filter((item => {
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                    || item.author.name.toLowerCase().includes(search)
                    || item.publication.name.toLowerCase().includes(search)
            }))
            .map(book => <SingleBooks key={book.id} book={book}></SingleBooks>)
    }
    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-10 container mx-auto pt-10 px-3">
            <div className="lg:col-span-3 col-span-1 w-full space-y-5">
                {/* sort by price and latest  */}
                <ProductSort handleFilterChange={handleFilterChange}></ProductSort>

                {/* sort by authors  */}
                <ShopByAuthors handleFilterChange={handleFilterChange}></ShopByAuthors>
                {/* sort by publications */}
                <ShopByPublications handleFilterChange={handleFilterChange}></ShopByPublications>

                {/* sort by subject */}
                <ShopBySubject handleFilterChange={handleFilterChange}></ShopBySubject>

                {/* <PriceRange price={filters.price} handleFilterChange={handleFilterChange}></PriceRange> */}
                {/* <EbookStock></EbookStock> */}
                {/* <ProductFilter></ProductFilter> */}
            </div>
            <div className="lg:col-span-9 col-span-1">
                <>
                    {/* <div className="block  rounded-full w-2/3  p-[1px] mb-5">
                        <div className="items-center justify-between border border-gray-300 rounded-full flex w-full bg-white p-1">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="outline-none w-full px-4 border-r border-red-500" placeholder="Serch Books..." />
                            <button className="px-4 py-1 rounded-full"><IoIosSearch className="text-2xl text-red-500" /></button>
                        </div>
                    </div> */}
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-2 md:max-w-xl">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="বই অনুসন্ধান করুন"
                            className="flex-1 px-4 border-none outline-none text-gray-700 placeholder-gray-500"
                        />
                        <button
                            className="bg-red-500 hover:bg-red-600 border-none outline-none text-white px-4 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 15.232l4.768 4.768m-6.414-3.182A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-4.768 8.518z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                        {content}
                    </div>
                </>
            </div>
        </div>


    );
};

export default AllBooks;