import { useSelector } from "react-redux";
import WishListCards from "./WishListCards";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WishList = () => {
    const navigate = useNavigate()
    const { wishList } = useSelector(state => state.cart)
    useEffect(()=>{
            if(!wishList?.length > 0){
                navigate('/')
            }
        },[wishList, navigate])
    return (
        <div className="container mx-auto p-5 space-y-5 md:mt-10">
            <div className="flex items-center justify-between border border-gray-200 shadow p-5">
                <h1 className="text-lg font-semibold text-primary">আপনার উইসলিস্ট</h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                {
                    wishList.map(item => <WishListCards key={item?.id} item={item}></WishListCards>)
                }
            </div>
        </div>

    );
};

export default WishList;