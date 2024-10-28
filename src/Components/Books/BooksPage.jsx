import AllBooks from "./AllBooks";


const BooksPage = () => {
    
    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-10 container mx-auto pt-10">
            <div className="lg:col-span-3 col-span-1 border-gray-300 border w-full h-72 sticky top-20">

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