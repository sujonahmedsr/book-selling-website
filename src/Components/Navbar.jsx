import { Link } from "react-router-dom";
import logo from '../assets/Img/rokomari_logo.webp'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { FaUsersRectangle } from "react-icons/fa6";
import { useState } from "react";
import { listOfNavigation } from "./Shared/navbarlist";
import useCustomNavbarSH from "../hooks/customNavbarSH";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const [show, hide, location] = useCustomNavbarSH()

    const { carts } = useSelector(state => state.cart)



    return (
        <>
            <header className={`p-2 border-b border-gray-300 fixed left-0 right-0 transition-all z-10 bg-white ${show && 'shadow-lg'} `}>
                <div className={`container flex items-center justify-between gap-10 mx-auto`}>
                    <Link>
                        <img src={logo} className="min-w-32 h-12" alt={logo} />
                    </Link>

                    <div className="lg:block hidden rounded-full w-1/3 bg-gradient-to-r from-red-500 to-blue-500 p-[1px]">
                        <div className="items-center justify-between border rounded-full flex w-full bg-white p-1">
                            <input type="text" className="outline-none w-full px-4 border-r border-red-500" placeholder="Serch Books..." />
                            <button className="px-4 py-1 rounded-full"><IoIosSearch className="text-2xl text-red-500" /></button>
                        </div>
                    </div>

                    <div className="lg:flex items-center hidden">

                        {/* to do: when authentication complete then change it to user profile  */}
                        <Link to={'/signIn'} className="rounded dark:text-gray-50 flex items-center gap-2 mx-4 hover:bg-red-500 duration-300 hover:text-white px-4 py-2 text-gray-700">
                            <FaRegUser className="text-xl" />
                            Sing in
                        </Link>

                        <button type="button" className="rounded flex items-center gap-2 mx-4 hover:text-red-500 duration-300 text-gray-700"> <FaUsersRectangle className="text-xl flex" /> Became a seller</button>

                        <Link to={'/AllCards'} type="button" className="rounded bg-red-500 hover:bg-gray-700 px-4 py-2 text-white mx-4 flex items-center space-x-2 duration-300">
                            <IoCartOutline className="text-2xl" />
                            <span className="font-bold">{carts?.length}</span>
                        </Link>
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
                        show || hide &&
                        <div className="flex items-center justify-center gap-10 font-thin text-gray-700 py-2 text-lg">
                            {
                                listOfNavigation.map((item, id) => <div key={id + 1}>
                                    <Link
                                        className={`hover:text-red-500 ${location?.pathname === item?.link && 'font-medium text-red-500'} duration-300`} to={item.link}>{item.title}</Link>
                                </div>)
                            }
                        </div>
                    }
                </div>
            </header>


            {/* for tab or mobile screen  */}
            <div
                className={
                    ` fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all z-10 ${isSideMenuOpen && "translate-x-0"}`
                }
            >
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
                    <IoCloseOutline
                        onClick={() => setMenu(false)}
                        className="mt-0 mb-8 text-3xl cursor-pointer"
                    />

                    {listOfNavigation.map((d, i) => (
                        <a key={i} className="font-bold" onClick={() => setMenu(false)} href={d.link}>
                            {d.title}
                        </a>
                    ))}
                </section>
            </div>
        </>

    );
};

export default Navbar;