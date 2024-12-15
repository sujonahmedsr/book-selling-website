import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MainLayout = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <HelmetProvider>
            <Helmet>
                <title>Kichukkhon.com</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div className="pt-24 pb-10">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
                <ToastContainer position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition:Bounce
                />
            </div>
        </HelmetProvider>
    );
};

export default MainLayout;