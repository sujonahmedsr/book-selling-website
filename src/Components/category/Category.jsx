import { useState } from "react";
import { useGetCategoryQuery } from "../../RTK/Fearures/getBook/getBookApi";
import { Link } from "react-router-dom";

const Category = () => {
    const [writerSearch, setWriterSearch] = useState('')
    const { data: allSubjects, isLoading, isError, error } = useGetCategoryQuery()

    let content;

    if (isLoading && !isError) content = <div className="text-lg font-semibold text-gray-700 h-[80vh]">Loading...</div>

    if (!isLoading && isError) content = <p className="text-red-600 h-[80vh]">Error: {error}</p>;

    if (!isLoading && isError && !allSubjects?.data?.length === 0) content = <div className="text-red-600 h-[80vh]">No Data Found...</div>;

    if (!isLoading && !isError && allSubjects?.data?.length > 0) {
        content = allSubjects?.data
            .filter((item => {
                return writerSearch.toLowerCase() === '' ? item : item.name.toLowerCase().includes(writerSearch)
            })).map(d => <Link to={`/categoryBooks/${d.slug}`} key={d.id}>
                <div className="border-l-2 border-red-600 py-2 px-4">{d.name}</div>
            </Link>
            )

    }

    return (
        <div className="container mx-auto p-5 space-y-5">
            <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                <h1 className="text-lg font-semibold text-red-600">ক্যাটাগরি সমূহ
                </h1>
            </div>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-sm">
                <input
                    onChange={(e) => setWriterSearch(e.target.value)}
                    type="text"
                    value={writerSearch}
                    placeholder="ক্যাটাগরি অনুসন্ধান করুন"
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

            <div className="flex flex-col gap-3">
                {content}
            </div>
        </div>
    );
};

export default Category;