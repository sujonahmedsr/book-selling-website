import { useParams } from "react-router-dom";
import { useBooksProductsApiQuery } from "../../RTK/Fearures/getBook/getBookApi";
import SingleBooks from "../Books/SingleBooks";

const SubjectBooks = () => {
    const { slug } = useParams()
    const subject = slug
    const { data: subjectBooks, isLoading, isError, error } = useBooksProductsApiQuery({ subject })

    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg font-semibold text-gray-700 h-[80vh]">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600 h-[80vh]">{error?.status}</div>
    }
    if (!isLoading && !isError && subjectBooks.data?.length === 0) {
        content = <div className="text-lg font-semibold text-gray-700 h-[80vh]">No Products Found...</div>
    }

    if (!isLoading && !isError && subjectBooks.data?.length > 0) {
        content = subjectBooks.data
            
            .map(book => <SingleBooks key={book.id} book={book}></SingleBooks>)
    }

    const writterName = subjectBooks?.data?.find(item => item?.subject)

    return (
        <div className="mt-5 container mx-auto px-4">
            <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                <h1 className="text-lg font-semibold text-red-600">{writterName?.subject?.name}</h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-5">
                {content}
            </div>
        </div>
    );
};

export default SubjectBooks;