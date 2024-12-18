import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAuth from "./providers/useAuth";
import { toast } from "react-toastify";

const SignUp = () => {
    const { login, register, user } = useAuth();
    const [show, setShow] = useState(true)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const location = useLocation()
    // const [districtId, setDistrictId] = useState("");
    // const [upazilaId, setUpazilaId] = useState("");
    // const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!name || !phone || !email || !password) {
            return setError("All fields are required.");
        }

        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isPhoneValid = /^[0-9]{11,13}$/.test(phone);

        if (!isEmailValid) {
            return setError("Please enter a valid email.");
        }

        if (!isPhoneValid) {
            return setError("Please enter a valid phone number.");
        }

        if (password.length < 6) {
            return setError('Password must be 6 character')
        }

        // Match Passwords
        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        // Data to Send
        const registrationData = {
            "name": name,
            "phone": phone,
            "email": email,
            "password": password
        };
        setError('')

        try {
            const result = await register(registrationData);
        
        if (result.success) {
            
            // login 
            const loginResult = await login({
                email: registrationData.email,
                password: registrationData.password,
            });
            if (loginResult.success) {
                console.log(loginResult);
                
                toast("Registration and login successful!");
                navigate(location?.state ? location.state : '/')
            } else {
                setError("Login failed after registration. Please try again.");
            }

        } else {
            setError(result.message);
        }
        } catch (error) {
            console.log(error);
            
        }

    };

    if(user) return
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
                    Create your account
                </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full border border-gray-300 p-5 sm:max-w-sm">
                <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={e => setName(e.target.value)}
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
                                onChange={e => setEmail(e.target.value)}
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
                        <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-700">
                            Phone
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={e => setPhone(e.target.value)}
                                id="number"
                                name="number"
                                type="number"
                                required
                                autoComplete="number"
                                placeholder="Phone"
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
                                onChange={e => setPassword(e.target.value)}
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
                                onChange={e => setConfirmPassword(e.target.value)}
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
                    <p className="text-red-500">{error}</p>

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