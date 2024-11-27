import { useGetAutorsQuery } from "../../RTK/Fearures/getBook/getBookApi";

const ShopByAuthors = ({ handleFilterChange }) => {
    const { data: authors } = useGetAutorsQuery()
    return (
        <div className="border border-gray-300 bg-gray-50 shadow-md">
            <div className="flex items-center justify-between border-b border-gray-300 p-3 ">
                <h1 className="text-xl font-bold ">লেখক</h1>
            </div>
            <div className="p-4 space-y-2 h-60 text-sm overflow-scroll overflow-x-hidden webkit-scrollbar">

                {
                    authors?.data?.map(item => <label key={item.id} className="flex items-center gap-2 " onClick={handleFilterChange}>
                        <input type="radio" name="authors" value={item?.slug}/>
                        <p className="text-gray-700 text-base">{
                            item?.name
                        }</p>
                    </label>)
                }
            </div>
        </div>
    );
};

export default ShopByAuthors;