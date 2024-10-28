import CustomarShippingDetails from "./CustomarShippingDetails";
import PriceHistory from "./PriceHistory";

const OrderDetails = () => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-10">
            <div className="col-span-7">
                <CustomarShippingDetails></CustomarShippingDetails>
            </div>
            <div className="col-span-5">
                <PriceHistory></PriceHistory>
            </div>
        </div>
    );
};

export default OrderDetails;