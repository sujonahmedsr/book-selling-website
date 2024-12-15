import GiftCustomarDetails from "./GiftCustomarDetails";
import PriceHistory from "./PriceHistory";

const GiftOrderDetails = () => {
    return (
        <div className="container md:mt-10 mx-auto grid md:grid-cols-12 grid-cols-1 gap-10 px-3">
            <div className="md:col-span-7">
                <GiftCustomarDetails></GiftCustomarDetails>
            </div>
            <div className="md:col-span-5">
                <PriceHistory></PriceHistory>
            </div>
        </div>
    );
};

export default GiftOrderDetails;