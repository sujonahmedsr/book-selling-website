import { Link } from "react-router-dom";
import logo from '../assets/Img/rokomari_logo.webp'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaUsersRectangle } from "react-icons/fa6";
import NavbarBottom from "./Shared/NavbarBottom";
import { useEffect, useState } from "react";
const Navbar = () => {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 50) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    return (
        <>
            <header className={`py-2 border-b fixed left-0 right-0 transition-all z-10 bg-white ${show && 'shadow-lg'} `}>
                <div className={`container flex items-center justify-between gap-10 mx-auto`}>
                    <Link>
                        <img src={logo} className="min-w-32 h-12" alt={logo} />
                    </Link>

                    <div className="rounded-full w-1/3 bg-gradient-to-r from-red-500 to-blue-500 p-[1px]">
                        <div className="items-center justify-between border rounded-full flex w-full bg-white p-1">
                            <input type="text" className="outline-none w-full px-4 border-r border-red-500" placeholder="Serch Books..." />
                            <button className="px-4 py-1 rounded-full"><IoIosSearch className="text-2xl text-red-500" /></button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link to={'/signIn'} className="rounded dark:bg-violet-600 dark:text-gray-50 flex items-center gap-2 mx-4 hover:bg-red-500 duration-300 hover:text-white px-4 py-2">
                            <FaRegUser className="text-xl" />
                            Sing in
                        </Link>
                        <button type="button" className="rounded flex items-center gap-2 mx-4 hover:text-red-500 duration-300"> <FaUsersRectangle className="text-xl flex" /> Became a seller</button>
                        <Link to={'/AllCards'} type="button" className="rounded bg-red-500 hover:bg-red-600 px-4 py-2 text-white mx-4 flex items-center space-x-2">
                            <IoCartOutline className="text-2xl" />
                            <span className="font-bold">1</span>
                        </Link>
                    </div>
                    {/* <button title="Open menu" type="button" className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button> */}
                </div>
                {
                    show ||
                    <NavbarBottom />
                }
            </header>

        </>

    );
};

export default Navbar;