import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { isValidEmail, isValidPhone } from "../hooks/validation";
import useAuth from "./providers/useAuth";
import { toast } from "react-toastify";

const SignIn = () => {
    const { login, user } = useAuth();
    const [show, setShow] = useState(true)
    const [userInput, setUserInput] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const location = useLocation()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValidEmail(userInput) || isValidPhone(userInput)) {
            const loginData = {
                phone: userInput,
                password
            }

            const result = await login(loginData);
        
            if (result.success) {
                toast("Login successful!");
                navigate(location?.state ? location.state : '/')
            } else {
                setError(result.message);
            }

        } else {
            setError("Please enter a valid email or phone number.");
        }
    };

    if(user) return
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
                    Sign in to your account
                </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-sm border border-gray-300 p-5">
                <form className="space-y-2" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="userInput"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email or Phone
                        </label>
                        <input
                            type="text"
                            id="userInput"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Enter your email or phone"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                        </div>
                        <div className="mt-2 relative">
                            <input
                                type={`${show ? 'password' : 'text'}`}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                            />
                            <div className="absolute right-2 top-2">
                                <p className="text-xl text-gray-700" onClick={() => setShow(!show)}>{show ? <FaEyeSlash /> : <FaEye />}</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-red-500">{error}</p>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 duration-300"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to={'/SignUp'} className="font-semibold leading-6 text-primary hover:text-gray-700 duration-300">
                        Create Acoount.
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;