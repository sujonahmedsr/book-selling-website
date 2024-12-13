import { Link } from "react-router-dom";
import logo from '../assets/logo/Kichukkhon.com Logo transparent background.png'
// import { FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { FaUsersRectangle } from "react-icons/fa6";
import { useState } from "react";
import { listOfNavigation } from "./Shared/navbarlist";
import useCustomNavbarSH from "../hooks/customNavbarSH";
import { useSelector } from "react-redux";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { IoIosSearch } from "react-icons/io";
import seller from '../assets/logo/become-seller-.svg'
import delivery from '../assets/logo/delivery-truck.svg'
import discount from '../assets/logo/discount-light.svg'
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const [show, hide, location] = useCustomNavbarSH()
    const { carts, wishList } = useSelector(state => state.cart)

    return (
        <>

            <header className={`p-2 border-b border-gray-300 fixed left-0 right-0 transition-all z-10 bg-white ${show && 'shadow-lg'} `}>
                {
                    show || hide &&
                    <nav className="duration-300 container mx-auto md:flex hidden items-center justify-between text-sm text-gray-600">
                        <p>Welcome to Kichukkhon.com!</p>
                        <div className="flex items-center gap-5">
                            <button className="flex items-center gap-1"><img src={delivery} alt="seller" /> Track your order</button>
                            <button className="flex items-center gap-1"> <img src={discount} alt="seller" />All Offers</button>
                            <button className="flex items-center gap-1"> <img src={seller} alt="seller" />Become a seller</button>
                        </div>
                    </nav>
                }
                <div className={`container flex items-center justify-between mx-auto pt-2`}>
                    <Link>
                        <img src={logo} className="h-14" alt={logo} />
                    </Link>

                    <div className="block border border-primary rounded-full w-2/4">
                        <div className="items-center justify-between border border-primary rounded-full flex w-full bg-white p-1">
                            <input type="text" className="outline-none w-full px-4 border-r border-primary" placeholder="Serch Books..." />
                            <button className="px-4 py-1 rounded-full"><IoIosSearch className="text-2xl text-primary border-primary" /></button>
                        </div>
                    </div>

                    <div className="lg:flex items-center hidden">

                        {/* to do: when authentication complete then change it to user profile  */}
                        {/* <Link to={'/signIn'} className="rounded dark:text-gray-50 flex items-center gap-2 mx-4 hover:bg-red-500 duration-300 hover:text-white px-4 py-2 text-gray-700">
                            <FaRegUser className="text-xl" />
                            Sing in
                        </Link> */}

                        {
                            wishList?.length > 0 ? <Link to={'/wishList'} className="relative">
                            <button type="button" className="rounded flex items-center gap-2 mx-4 hover:text-primary duration-300 text-gray-700">  <FaRegHeart className="text-2xl" /> </button>

                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-0">{wishList?.length}</div>
                        </Link>
                        :
                        <div className="relative" data-tooltip-id="my-tooltip" data-tooltip-content="Wishlist is empty.">
                            <button type="button"  className="rounded flex items-center gap-2 mx-4 hover:text-primary duration-300 text-gray-700">  <FaRegHeart className="text-2xl" /> </button>

                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-white rounded-full -top-2 -end-0">{wishList?.length}</div>
                            <Tooltip id="my-tooltip" />
                        </div>
                        }


                        {
                            carts?.length > 0 ? <Link to={'/AllCards'} type="button" className="rounded bg-primary hover:bg-gray-700 px-4 py-2 text-white mx-4 flex items-center space-x-2 duration-300">
                                <IoCartOutline className="text-2xl" />
                                <span className="font-bold">{carts?.length}</span>
                            </Link>
                                :
                                <>
                                    <button data-tooltip-id="my-tooltip" data-tooltip-content="Your carts is emty now." type="button" className="rounded bg-primary hover:bg-gray-700 px-4 py-2 text-white mx-4 flex items-center space-x-2 duration-300">
                                        <IoCartOutline className="text-2xl" />
                                        <span className="font-bold">{carts?.length}</span>
                                    </button>
                                    <Tooltip id="my-tooltip" />
                                </>
                        }
                    </div>


                    {/* it's show only middle screen  */}
                    <button onClick={() => setMenu(true)} title="Open menu" type="button" className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>


                {/* Category just showing navbar  */}

                <div className="lg:block hidden">
                    {
                        // show || hide &&
                        <div className="flex items-center justify-center font-thin text-gray-700 text-lg">
                            {
                                listOfNavigation.map((item, id) => <div key={id + 1}>
                                    <Link
                                        className={`hover:text-white ${location?.pathname === item?.link && 'font-medium bg-primary text-white'} duration-300 px-3 py-1 hover:bg-primary`} to={item.link}>{item.title}</Link>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </header>


            {/* for tab or mobile screen  */}
            <div
                className={
                    ` fixed h-full w-screen  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all z-10 ${isSideMenuOpen && "translate-x-0"}`
                }
            >
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-5 gap-4 z-50 w-56 flex">
                    <IoCloseOutline
                        onClick={() => setMenu(false)}
                        className="mt-0 mb-8 text-3xl cursor-pointer"
                    />

                    {
                        listOfNavigation.map((d, i) => (
                            <a key={i} className="text-base hover:text-primary duration-200" onClick={() => setMenu(false)} href={d.link}>
                                {d.title}
                            </a>
                        ))
                    }
                    <div onClick={() => setMenu(false)} className="flex flex-col space-y-2">
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-sm">
                            <Link to={'/AllBooks'}>
                                <button
                                    className="text-gray-900 text-2xl border-none outline-none hover:text-white px-4 py-2 hover:bg-gray-700 duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15.232 15.232l4.768 4.768m-6.414-3.182A7.5 7.5 0 1118 10.5a7.5 7.5 0 01-4.768 8.518z"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        {/* to do: when authentication complete then change it to user profile  */}
                        {/* <Link to={'/signIn'} onClick={() => setMenu(false)} className="rounded dark:text-gray-50 flex items-center gap-2 hover:bg-primary duration-300 hover:text-white px-4 py-2 text-gray-700 text-sm">
                            <FaRegUser />
                            Sing in
                        </Link> */}

                        <button type="button" onClick={() => setMenu(false)} className="rounded dark:text-gray-50 flex items-center gap-2 hover:bg-primary duration-300 hover:text-white px-4 py-2 text-gray-700 text-sm"> <FaUsersRectangle className="text-lg " /> Became a seller</button>

                        <Link to={'/AllCards'} onClick={() => setMenu(false)} type="button" className="rounded bg-primary hover:bg-gray-700 px-4 py-2 text-white flex items-center space-x-2 duration-300">
                            <IoCartOutline className="text-2xl" />
                            <span className="font-bold">{carts?.length}</span>
                        </Link>
                    </div>
                </section>
            </div>
        </>

    );
};

export default Navbar;