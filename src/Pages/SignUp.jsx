import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                
                <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
                    Create your account
                </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full border border-gray-300 p-5 sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                placeholder="Full Name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:outline-gray-400 px-2 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
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
                                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:outline-gray-400 px-2 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                type={`${show ? 'password' : 'text'}`}
                                required
                                placeholder="Password"
                                autoComplete="current-password"
                                className=" block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:outline-gray-400 px-2 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-700">
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password1"
                                name="password"
                                type={`${show ? 'password' : 'text'}`}
                                placeholder="Confirm Password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:outline-gray-400 px-2 sm:text-sm sm:leading-6"
                            />
                            <div className="absolute right-2 top-2">
                                <p className="text-xl text-gray-700" onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 duration-300"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-5 text-center text-sm text-gray-500">
                    Have Account?{' '}
                    <Link to={'/SignIn'} className="font-semibold leading-6 text-primary hover:text-gray-700 duration-300">
                        Sign in.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;