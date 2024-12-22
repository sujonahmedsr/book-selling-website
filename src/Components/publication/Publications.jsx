import { useState } from "react";
import { useGetPublicationsQuery } from "../../RTK/Fearures/getBook/getBookApi";
import { Link } from "react-router-dom";

const Publications = () => {
    const [publicationSearch, setPublicationSearch] = useState('')
    const { data: allPublications, isLoading, isError, error } = useGetPublicationsQuery()

    let content;

    if (isLoading && !isError) content = <div className="text-lg font-semibold text-gray-700 h-[80vh]">Loading...</div>

    if (!isLoading && isError) content = <p className="text-red-600 h-[80vh]">Error: {error}</p>;

    if (!isLoading && isError && !allPublications?.data?.length === 0) content = <div className="text-red-600 h-[80vh]">No Data Found...</div>;

    if (!isLoading && !isError && allPublications?.data?.length > 0) {
        content = allPublications?.data
            .filter((item => {
                return publicationSearch.toLowerCase() === '' ? item : item.name.toLowerCase().includes(publicationSearch)
            })).map(d => <Link to={`/publications/${d.slug}`} key={d.id}>
                <img src={d.img} alt="dummy imgage" className='w-20 mx-auto h-20 rounded-full border-2 border-gray-300' />
                <div key={d.id} className=" border-primary py-2 px-4">{d.name}</div>
            </Link>
            
            )
    }

    return (
        <div className="container mx-auto md:mt-10 p-5 space-y-5">
            <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                <h1 className="text-lg font-semibold text-primary">জনপ্রিয় প্রকাশক</h1>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-sm">
                <input
                    type="text"
                    value={publicationSearch}
                    onChange={(e) => setPublicationSearch(e.target.value)}
                    placeholder="প্রকাশক অনুসন্ধান করুন"
                    className="flex-1 px-4 border-none outline-none text-gray-700 placeholder-gray-500"
                />
                <button
                    className="bg-primary hover:bg-primary border-none outline-none text-white px-4 py-2">
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

            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 text-center gap-5">
                {content}
            </div>
        </div>
    );
};

export default Publications;