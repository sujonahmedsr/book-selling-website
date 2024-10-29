import { Link } from "react-router-dom";
import logo from "../assets/Img/rokomari_logo.webp";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Link to={'/'}>
                    <img
                        alt="Your Company"
                        src={logo}
                        className="mx-auto h-10 w-auto"
                    />
                </Link>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 p-5">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="E-mail"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:outline focus:outline-gray-400 px-2 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                type={`${show ? 'password' : 'text'}`}
                                required
                                autoComplete="current-password"
                                placeholder="Password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 focus:outline focus:outline-gray-400 px-2  ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                            <div className="absolute right-2 top-2">
                                <p className="text-xl text-gray-700" onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 "
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to={'/SignUp'} className="font-semibold leading-6 text-red-500 hover:text-red-600">
                        Create Acoount.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;