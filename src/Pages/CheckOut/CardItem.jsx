import { useSelector } from "react-redux";
import Card from "./Card";

const CardItem = () => {
    const { carts } = useSelector(state => state.cart)

    return (
        <div>
            {
                carts?.length > 0
                    ?
                    carts.map(item => <Card key={item?.id} item={item}></Card>)
                    :
                    <div>No Carts Add</div>
            }


        </div>
    );
};

export default CardItem;