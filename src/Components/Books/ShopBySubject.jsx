import { useGetSubjectsQuery } from "../../RTK/Fearures/getBook/getBookApi";

const ShopBySubject = ({ handleFilterChange }) => {
    const { data: allBooks } = useGetSubjectsQuery()
    return (
        <div className="border border-gray-300 bg-gray-50 shadow-md">
            <div className="flex items-center justify-between border-b border-gray-300 p-3">
                <h1 className="text-xl font-bold ">বিষয় সমূহ</h1>
            </div>
            <div className="p-4 space-y-2 h-60 text-sm overflow-scroll overflow-x-hidden webkit-scrollbar">
                {
                    allBooks?.data?.map(item => <label key={item.id} className="flex items-center gap-2 " onClick={handleFilterChange}>
                        <input type="radio" name="subject" value={item?.slug} />
                        <p className="text-gray-700 text-base">{
                            item?.name
                        }</p>
                    </label>)
                }
            </div>
        </div>
    );
};

export default ShopBySubject;