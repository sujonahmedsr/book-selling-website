import { Link } from "react-router-dom";
import BarMove from "./BarMove";
import BookInHomePage from "./BookInHomePage";
import HeroArea from "./HeroArea";
import OfferPage from "./OfferPage";

const HeroPage = () => {
    return (
        <div className="lg:pt-10 pt-0">
            <HeroArea></HeroArea>
            <div className="mt-24 container mx-auto bg-gray-100 border p-3 shadow-md">
                {/* todo : delete this form here  */}
                <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-700">Choose Yours</h1>
                    <Link to={'/AllBooks'}>
                        <button className="float-end py-3 font-medium text-gray-700 hover:text-red-500 duration-300">View All Books</button>
                    </Link>
                </div>
                
                <BookInHomePage></BookInHomePage>
            </div>
            <OfferPage></OfferPage>
            <BarMove></BarMove>
            
        </div>
    );
};

export default HeroPage;