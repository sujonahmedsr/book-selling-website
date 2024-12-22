import { Link } from "react-router-dom";
import BarMove from "./BarMove";
import BookInHomePage from "./BookInHomePage";
import HeroArea from "./HeroArea";
import OfferPage from "./OfferPage";
import Writer from "./writer";
import Publication from "./Publication";
import ImgWithTitle from "./imgWithTitle";

const HeroPage = () => {
    return (
        <div className="lg:pt-10 pt-0">
            <HeroArea></HeroArea>
            <div className="mt-24 container mx-auto">
                {/* todo : delete this form here  */}
                <div className="flex items-center justify-between border border-gray-200 shadow-lg p-5 bg-white">
                    <h1 className="text-lg font-semibold text-primary">নতুন প্রকাশিত বই
                    </h1>
                    <Link to={'/AllBooks'}>
                        <button className="px-4 py-2 border border-gray-100 bg-primary text-white hover:bg-gray-700 duration-300">সকল বই</button>
                    </Link>
                </div>

                <BookInHomePage></BookInHomePage>
            </div>
            <ImgWithTitle></ImgWithTitle>
            <OfferPage></OfferPage>
            <Writer></Writer>
            <Publication></Publication>
            <BarMove></BarMove>
        </div>
    );
};

export default HeroPage;