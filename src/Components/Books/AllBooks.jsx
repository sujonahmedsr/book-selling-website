import { useBooksProductsApiQuery } from "../../RTK/Fearures/getBook/getBookApi";
import SingleBooks from "./SingleBooks";

const AllBooks = () => {
    const {data: allBooks, isLoading, isError, error} = useBooksProductsApiQuery()

    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg font-semibold text-gray-700">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600">{error?.status}</div>
    }
    if (!isLoading && !isError && allBooks?.length === 0) {
        content = <div className="text-lg font-semibold text-gray-700">No Products Found...</div>
    }
    if (!isLoading && !isError && allBooks?.length > 0) {
        content = allBooks.map(book => <SingleBooks key={book.id} book={book}></SingleBooks>)
    }
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {content}
        </div>
    );
};

export default AllBooks;