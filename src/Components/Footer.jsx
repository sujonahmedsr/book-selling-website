import { Link } from 'react-router-dom'
import logo from '../assets/logo/Kichukkhon.com Logo transparent background.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { listOfNavigation } from './Shared/navbarlist';
const Footer = () => {
    return (
        <footer className='bg-gray-100 border-t'>
            <div className="flex lg:flex-row flex-col flex-wrap justify-between container mx-auto p-5 text-sm space-y-5">
                <div className='text-gray-600 space-y-5'>
                    <Link to={'/'}>
                        <img src={logo} className='h-14' alt={logo} />
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
                        {
                            listOfNavigation.map((item, id) => <div key={id + 1}>
                                <li className={`hover:text-primary hover:pl-1 duration-200`}>
                                <Link
                                     to={item.link}>{item.title}</Link>
                                </li>
                                
                            </div>)
                        }
                        
                    </ul>
                </div>

                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Products</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link>Authors</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link>Publishers</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link>List</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link>Reviews</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link>Stationery</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Importance Pages</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/about-us'}>
                            About Us
                            </Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/ReturnPolicy'}>Return Policy</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/RefundPolicy'}>Refund Policy</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/ShippingPolicy'}>Shipping Policy</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/TermsConditions'}>Terms Conditions</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/PrivacyPolicy'}>Privacy Policy</Link>
                        </li>
                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/ExchangePolicy'}>Exchange Policy</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-base font-semibold mb-2 text-gray-600'>Support</h1>
                    <ul className='list-disc ml-5 text-gray-700 space-y-2'>

                        <li className='hover:text-primary hover:pl-1 duration-200'>
                            <Link to={'/ContactUs'}>Contact Us</Link>
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