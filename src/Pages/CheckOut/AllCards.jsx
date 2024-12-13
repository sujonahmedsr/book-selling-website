import CardItem from "./CardItem";
import Checkout from "./Checkout";


const AllCards = () => {
    return (
        <div className="grid md:grid-cols-12 grid-cols-1 gap-5 container mx-auto px-3 md:mt-10">
            <div className="md:col-span-8">
                <CardItem></CardItem>
            </div>
            <div className="md:col-span-4">
                <Checkout></Checkout>
            </div>
        </div>
    );
};

export default AllCards;