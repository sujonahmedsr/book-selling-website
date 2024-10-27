import CardItem from "./CardItem";
import Checkout from "./Checkout";


const AllCards = () => {
    return (
        <div className="grid grid-cols-12 gap-5 container mx-auto">
            <div className="col-span-8">
                <CardItem></CardItem>
            </div>
            <div className="col-span-4">
                <Checkout></Checkout>
            </div>
        </div>
    );
};

export default AllCards;