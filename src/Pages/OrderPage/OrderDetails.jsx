import CustomarShippingDetails from "./CustomarShippingDetails";
import PriceHistory from "./PriceHistory";

const OrderDetails = () => {
    return (
        <div className="container mx-auto grid md:grid-cols-12 grid-cols-1 gap-10 px-3">
            <div className="md:col-span-7">
                <CustomarShippingDetails></CustomarShippingDetails>
            </div>
            <div className="md:col-span-5">
                <PriceHistory></PriceHistory>
            </div>
        </div>
    );
};

export default OrderDetails;