import { FaShippingFast } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
const BarMove = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center justify-evenly gap-10 mt-24 bg-red-500 text-white p-10">
            <div className="flex items-start gap-5">
                <FaShippingFast className="text-5xl"/>
                <div>
                    <h1 className="text-xl font-semibold">FREE SHIPPING</h1>
                    <p className="text-sm font-thin">Curier Information</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <MdPayment className="text-5xl"/>
                <div>
                    <h1 className="text-xl font-semibold">CASH ON DELIVERY</h1>
                    <p className="text-sm font-thin">Payment Methods</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <RiCustomerService2Line className="text-5xl"/>
                <div>
                    <h1 className="text-xl font-semibold">24/7 SUPPORT</h1>
                    <p className="text-sm font-thin">Unlimited Help Desk</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <AiOutlineSafety className="text-5xl" />
                <div>
                    <h1 className="text-xl font-semibold">100% SAFE</h1>
                    <p className="text-sm font-thin">View or Benefits</p>
                </div>
            </div>
            <div className="flex items-start gap-5">
                <GiReturnArrow className="text-5xl"/>
                <div>
                    <h1 className="text-xl font-semibold">FREE RETURNS</h1>
                    <p className="text-sm font-thin">Track or Cancer ordres</p>
                </div>
            </div>
        </div>
    );
};

export default BarMove;