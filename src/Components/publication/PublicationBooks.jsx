import { useParams } from "react-router-dom";
import { useBooksProductsApiQuery } from "../../RTK/Fearures/getBook/getBookApi";
import SingleBooks from "../Books/SingleBooks";

const PublicationBooks = () => {
    const { slug } = useParams()
    const publication = slug
    const { data: authorBooks, isLoading, isError, error } = useBooksProductsApiQuery({ publication })

    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg font-semibold text-gray-700 h-[80vh]">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600 h-[80vh]">{error?.status}</div>
    }
    if (!isLoading && !isError && authorBooks.data?.length === 0) {
        content = <div className="text-lg font-semibold text-gray-700 h-[80vh]">No Products Found...</div>
    }

    if (!isLoading && !isError && authorBooks.data?.length > 0) {
        content = authorBooks.data
            
            .map(book => <SingleBooks key={book.id} book={book}></SingleBooks>)
    }

    const writterName = authorBooks?.data?.find(item => item?.publication)

    return (
        <div className="md:mt-10 p-5 container mx-auto px-4">
            <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                <h1 className="text-lg font-semibold text-red-600">{writterName?.publication?.name}</h1>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
                {content}
            </div>
        </div>
    );
};

export default PublicationBooks;