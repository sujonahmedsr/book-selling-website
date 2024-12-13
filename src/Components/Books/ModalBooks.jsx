import { useParams } from "react-router-dom";
import { useSingleBooksApiQuery } from "../../RTK/Fearures/getBook/getBookApi";
import SingleModalBook from "./SingleModalBook";

const ModalBooks = () => {
    const {slug} = useParams()
    const {data: bookDeta, isLoading, isError, error} = useSingleBooksApiQuery(slug)
    const bookDetails = bookDeta?.data

    
    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg flex items-center justify-center font-semibold text-gray-700 h-[75vh]">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-lg flex items-center justify-center font-semibold  h-[75vh] text-red-600">{error?.status}</div>
    }
    if (!isLoading && !isError && !bookDetails) {
        content = <div className="text-lg flex items-center justify-center  text-gray-700 h-[75vh] font-semibold ">No Book Found...</div>
    }

    if (!isLoading && !isError && bookDetails) {
        content = <SingleModalBook key={bookDetails.id} bookDetails={bookDetails}></SingleModalBook>
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md z-10">
            {content}
        </div>
    );
};

export default ModalBooks;