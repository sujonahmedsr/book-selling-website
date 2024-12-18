import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const Navigate = useNavigate()

  const login = async (loginData) => {
    
    
    try {
      console.log(loginData);
      const response = await axios.post("https://kichukkhon.arnobghosh.me/api/login", loginData);


      localStorage.setItem("user", JSON.stringify(response?.data?.user));
      localStorage.setItem("authToken", response?.data?.token); // Save token in localStorage

      setUser(response?.data?.user);
      setToken(response?.data?.token);
      return { success: true };
    } catch (error) {
      toast("Login failed")
      return { success: false, message: error.response?.data?.message || "Login failed." };
    }
  };
//   const login = async (loginData) => {
//     try {
//         console.log("Login Data:", loginData);

//         // Basic email and password validation
//         const emailRegex = /\S+@\S+\.\S+/;
//         if (!emailRegex.test(loginData.email)) {
//             toast("Invalid email format");
//             return { success: false, message: "Invalid email format" };
//         }
//         if (loginData.password.length < 6) {
//             toast("Password is too short");
//             return { success: false, message: "Password is too short" };
//         }

//         const response = await axios.post("https://kichukkhon.arnobghosh.me/api/login", loginData);

//         console.log("Login Success:", response.data);

//         // If successful, store user info and token in localStorage
//         localStorage.setItem("user", JSON.stringify(response?.data?.user));
//         localStorage.setItem("authToken", response?.data?.token);  // Save token in localStorage

//         // Optionally update state if needed
//         setUser(response?.data?.user);
//         setToken(response?.data?.token);

//         return { success: true };
//     } catch (error) {
//         console.log("Login Error Response:", error.response?.data);  // Debugging the full error response

//         // Handle login failure and return a descriptive message
//         toast("Login failed");
//         return { success: false, message: error.response?.data?.message || "Login failed." };
//     }
// };


  const register = async (registrationData) => {
    try {
      const result = await axios.post("https://kichukkhon.arnobghosh.me/api/register", registrationData);
      
      return { result, success: true };
    } catch (error) {
      toast("Registration failed:");
      return { success: false, message: error.response?.data?.message || "Registration failed." };
    }
  };

  const logout = () => {
    // Clear user-related state
    setUser(null);
    setToken("");

    // Remove the token from storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    Navigate('/')
  };

  // On initial load, check for stored data
  useEffect(() => {
    setLoading(true)
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false)
  }, []);

  const authInfo = {
    user,
    token,
    login,
    register,
    loading,
    logout
  }


  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
}
