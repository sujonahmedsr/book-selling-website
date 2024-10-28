import { Link } from 'react-router-dom'
import logo from '../assets/Img/rokomari_logo.webp'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className='bg-gray-100 border-t'>
            <div className="flex lg:flex-row flex-col flex-wrap justify-between container mx-auto p-5 text-sm space-y-5">
                <div className='text-gray-600 space-y-5'>
                    <Link to={'/'}>
                        <img src={logo} className='w-32' alt={logo} />
                    </Link>
                    <div className='flex flex-col'>
                        <h1>Customer Care</h1>
                        <div>
                            <p>Send us an email: <span className='text-gray-900 font-semibold'>care@yourcompany.com</span></p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <FaRegHandshake className='text-3xl' />
                        <div>
                            <h1>To be a seller! Email Us</h1>
                            <p className='text-gray-900 font-semibold'>seller@yourcompany.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <MdOutlineMailOutline className='text-3xl' />
                        <div>
                            <h1>Email Us</h1>
                            <p className='text-gray-900 font-semibold'>admin@yourcompany.com</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <IoHomeOutline className='text-3xl' />
                        <div>
                            <h1>2/1/E, Eden Center, Arambag</h1>
                            <p>Motijheel, Dhaka-1000</p>
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Home</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>About Us</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Books</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Electronics</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Accessories</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Gift Voucher</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Stationery</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Products</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Authors</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Publishers</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>List</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Reviews</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Stationery</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Shop by</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Book Category</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Electronics Category</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Boi Mela 2024</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Islamic Book</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Foreign Books</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Best Selling</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Extra Discount</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Stationery</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Support</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Order Track</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Contact Us</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Find My Product</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Customer FAQ</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Terms of Use</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Privacy Policy</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Happy Return Policy</Link>
                        </li>
                        <li className='hover:text-red-400 hover:pl-1 duration-200'>
                            <Link>Refund Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* </div> */}
            <div className='flex items-center justify-center text-center py-5 border-t border-gray-200'>
                <div className='space-y-4'>
                    <h1 className='text-lg font-semibold text-gray-600'>Stay Connected</h1>
                    <div className='flex items-center gap-5 text-3xl text-gray-600'>
                        <Link to={'/'}>
                            <FaFacebookSquare />
                        </Link>
                        <Link to={'/'}>
                            <FaInstagramSquare />
                        </Link>
                        <Link to={'/'}>
                            <FaLinkedin />
                        </Link>
                        <Link to={'/'}>
                            <FaTwitter />
                        </Link>
                        <Link to={'/'}>
                            <FaYoutube />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;