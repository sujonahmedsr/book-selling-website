import { useParams } from "react-router-dom";
import { useSingleBooksApiQuery } from "../../RTK/Fearures/getBook/getBookApi";
import SingleBookDetails from "./singleBookDetails";

const BooksDetails = () => {
    const {id} = useParams()
    const {data: bookDeta, isLoading, isError, error} = useSingleBooksApiQuery(id)

    
    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg font-semibold text-gray-700">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600">{error?.status}</div>
    }
    if (!isLoading && !isError && !bookDeta) {
        content = <div className="text-lg font-semibold text-gray-700">No Book Found...</div>
    }
    if (!isLoading && !isError && bookDeta) {
        content = <SingleBookDetails bookDeta={bookDeta}></SingleBookDetails>
    }

    return (
        <div className="container mx-auto pt-10">
            {content}
        </div>
    );
};

export default BooksDetails;