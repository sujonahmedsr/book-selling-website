import { IoMdClose } from "react-icons/io";

const Card = () => {

    return (
        <div className="rounded-lg">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start border">
                <img
                    src={'sdfsdf'}
                    alt='sdfsdf'
                    className="w-full h-28 rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">

                    {/* product details */}
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                            Physics 2
                        </h2>
                        <p className="mt-1 text-sm text-gray-700">Price: $120</p>
                        <p className="mt-1 text-sm text-gray-700">Category: sa</p>
                    </div>

                    {/* add & minus quantity */}
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                {" "}
                                -{" "}
                            </span>
                            <input
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                type="number"
                                min="1"
                            />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">

                                +
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">$120</p>

                            <button className="lws-removeFromCart" >
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;