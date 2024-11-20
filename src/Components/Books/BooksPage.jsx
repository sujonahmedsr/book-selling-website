import AllBooks from "./AllBooks";
import ProductLeftSideFunc from "./ProductLeftSideFunc";


const BooksPage = () => {
    
    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-10 container mx-auto pt-10 px-3">
            <div className="lg:col-span-3 col-span-1 w-full">
                <ProductLeftSideFunc></ProductLeftSideFunc>
            </div>
            <div className="lg:col-span-9 col-span-1">
                <div >
                    <AllBooks></AllBooks>
                </div>
            </div>
        </div>
    );
};

export default BooksPage;