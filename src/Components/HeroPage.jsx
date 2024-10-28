import BarMove from "./BarMove";
import AllBooks from "./Books/AllBooks";
import HeroArea from "./HeroArea";
import OfferPage from "./OfferPage";

const HeroPage = () => {
    return (
        <div className="pt-10">
            <HeroArea></HeroArea>
            <div className="py-10 container mx-auto">
                {/* todo : delete this form here  */}
                <AllBooks></AllBooks>
            </div>
            <OfferPage></OfferPage>
            <BarMove></BarMove>
        </div>
    );
};

export default HeroPage;